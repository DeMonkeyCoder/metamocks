import {expect} from "chai";
import MetaMocks, {UniswapInterfaceMulticallMockContract} from "../ts-src";
import {
  Erc20MockContract,
  Erc20MockContractAllowAll,
} from "../ts-src/test-utils/mock-contracts/Erc20";
import {Erc20} from "../ts-src/test-utils/abis/types";
import {
  CHAIN_ID,
  TEST_ADDRESS_NEVER_USE,
  TEST_CONTRACT_ADDRESS,
  TEST_ERC20_CONTRACT_ADDRESS,
  TEST_MULTICALL_CONTRACT_ADDRESS,
  TEST_PRIVATE_KEY,
  TOKEN_BALANCE,
} from "../ts-src/test-utils/data";
import MulticallJson
  from "@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json";
import {decodeFunctionResult, encodeFunctionData} from "../ts-src/utils/abi";
import {MaxUint256} from "@ethersproject/constants";
import ERC20_ABI from "../ts-src/test-utils/abis/erc20.json";
import {UniswapInterfaceMulticall} from "../ts-src/abis/types/uniswap";
import {BigNumber} from "ethers";

const {abi: MulticallABI} = MulticallJson;

describe("Metamocks", () => {
  let metamocks: MetaMocks;
  beforeEach(() => {
    metamocks = new MetaMocks(TEST_PRIVATE_KEY, CHAIN_ID);
  });

  it("can get instance", () => {
    expect(metamocks).not.to.be.null;
  });

  it("can get accounts", async () => {
    const res = await metamocks.send("eth_requestAccounts", []);
    expect(res[0]).to.eq(TEST_ADDRESS_NEVER_USE);
  });

  it("can get chain id", async () => {
    const res = await metamocks.send("eth_chainId", []);
    expect(res).to.eq("0x" + CHAIN_ID.toString(16));
  });

  it("can get blockNumber", async () => {
    const res = await metamocks.send("eth_blockNumber", []);
    expect(res).to.be.gt(0);
  });

  function getAllowance() {
    const allowanceCall = encodeFunctionData(ERC20_ABI, "allowance", [
      TEST_ADDRESS_NEVER_USE,
      TEST_CONTRACT_ADDRESS,
    ]);
    return metamocks.send("eth_call", [
      {to: TEST_ERC20_CONTRACT_ADDRESS, data: allowanceCall},
      1,
    ]);
  }

  it("can read data from test contract", async () => {
    metamocks.registerMockContract<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20MockContractAllowAll
    );
    const res = await getAllowance();
    expect(res).to.eq(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
  });

  it("can read test contract by multicall", async () => {
    metamocks.registerMockContract<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20MockContract
    );
    metamocks.registerMockContract<UniswapInterfaceMulticall>(
      TEST_MULTICALL_CONTRACT_ADDRESS,
      UniswapInterfaceMulticallMockContract
    );
    const balanceCall = encodeFunctionData(ERC20_ABI, "balanceOf", [
      TEST_ADDRESS_NEVER_USE,
    ]);
    const calls = [[TEST_ERC20_CONTRACT_ADDRESS, 10, balanceCall]];
    const multicall = encodeFunctionData(MulticallABI, "multicall", [calls]);
    const res = await metamocks.send("eth_call", [
      {to: TEST_MULTICALL_CONTRACT_ADDRESS, data: multicall},
      1,
    ]);
    const decoded = decodeFunctionResult(MulticallABI, "multicall", res);
    expect(BigNumber.from(decoded.returnData[0].returnData).eq(TOKEN_BALANCE))
      .to.be.true;
  });

  const approveTransactionData = encodeFunctionData(ERC20_ABI, "approve", [
    TEST_CONTRACT_ADDRESS,
    MaxUint256,
  ]);

  function sendApproveTransaction() {
    return metamocks.send("eth_sendTransaction", [
      {
        to: TEST_ERC20_CONTRACT_ADDRESS,
        data: approveTransactionData,
      },
      1,
    ]);
  }

  it("can send transaction to the test contract", async () => {
    metamocks.registerMockContract<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20MockContract
    );

    // before transaction
    const firstResult = await getAllowance();
    expect(firstResult).to.eq(
      "0x0000000000000000000000000000000000000000000000000000000000000000"
    );

    // transaction
    const transactionHash = await sendApproveTransaction();
    expect(transactionHash).to.have.length(66);

    // after transaction
    const secondResult = await getAllowance();
    expect(secondResult).to.eq(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
  });

  it("can get transaction data by hash after sending the transaction", async () => {
    metamocks.registerMockContract<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20MockContract
    );

    const transactionHash = await sendApproveTransaction();
    const tx = await metamocks.send("eth_getTransactionByHash", [
      transactionHash,
    ])
    expect(tx.data).to.eq(approveTransactionData)
  });
});
