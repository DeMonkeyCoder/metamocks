import { expect } from "chai";
import MetaMocks from "../ts-src";
import {
  Erc20AbiHandler,
  Erc20AbiHandlerAllowAll,
} from "../ts-src/test-utils/abihandlers/Erc20";
import { Erc20 } from "../ts-src/test-utils/abis/types";
import {
  CHAIN_ID,
  TEST_ADDRESS_NEVER_USE,
  TEST_CONTRACT_ADDRESS,
  TEST_ERC20_CONTRACT_ADDRESS,
  TEST_MULTICALL_CONTRACT_ADDRESS,
  TEST_PRIVATE_KEY,
  TOKEN_BALANCE,
} from "../ts-src/test-utils/data";
import MulticallJson from "@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json";
import { decodeFunctionResult, encodeFunctionData } from "../ts-src/utils/abi";
import { MaxUint256 } from "@ethersproject/constants";
import ERC20_ABI from "../ts-src/test-utils/abis/erc20.json";
import { UniswapInterfaceMulticall } from "../ts-src/test-utils/abis/types/uniswap";
import MulticallUniswapAbiHandler from "../ts-src/test-utils/abihandlers/MulticallUniswapInterface";
import { BigNumber } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";

const { abi: MulticallABI } = MulticallJson;

describe("Metamocks", () => {
  let metamocks: MetaMocks;
  beforeEach(() => {
    const provider = new JsonRpcProvider(
      "https://goerli.infura.io/v3/4bf032f2d38a4ed6bb975b80d6340847",
      4
    );
    metamocks = new MetaMocks(TEST_PRIVATE_KEY, CHAIN_ID, provider);
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
      { to: TEST_ERC20_CONTRACT_ADDRESS, data: allowanceCall },
      1,
    ]);
  }

  it("can read data from test contract", async () => {
    metamocks.registerAbiHandler<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20AbiHandlerAllowAll
    );
    const res = await getAllowance();
    expect(res).to.eq(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
  });

  it("can read test contract by multicall", async () => {
    metamocks.registerAbiHandler<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20AbiHandler
    );
    metamocks.registerAbiHandler<UniswapInterfaceMulticall>(
      TEST_MULTICALL_CONTRACT_ADDRESS,
      MulticallUniswapAbiHandler
    );
    const balanceCall = encodeFunctionData(ERC20_ABI, "balanceOf", [
      TEST_ADDRESS_NEVER_USE,
    ]);
    const calls = [[TEST_ERC20_CONTRACT_ADDRESS, 10, balanceCall]];
    const multicall = encodeFunctionData(MulticallABI, "multicall", [calls]);
    const res = await metamocks.send("eth_call", [
      { to: TEST_MULTICALL_CONTRACT_ADDRESS, data: multicall },
      1,
    ]);
    const decoded = decodeFunctionResult(MulticallABI, "multicall", res);
    expect(BigNumber.from(decoded.returnData[0].returnData).eq(TOKEN_BALANCE))
      .to.be.true;
  });

  function sendApproveTransaction() {
    const approveTransaction = encodeFunctionData(ERC20_ABI, "approve", [
      TEST_CONTRACT_ADDRESS,
      MaxUint256,
    ]);
    return metamocks.send("eth_sendTransaction", [
      {
        to: TEST_ERC20_CONTRACT_ADDRESS,
        data: approveTransaction,
      },
      1,
    ]);
  }

  it("can send transaction to the test contract", async () => {
    metamocks.registerAbiHandler<Erc20>(
      TEST_ERC20_CONTRACT_ADDRESS,
      Erc20AbiHandler
    );

    // before transaction
    const firstResult = await getAllowance();
    expect(firstResult).to.eq(
      "0x0000000000000000000000000000000000000000000000000000000000000000"
    );

    // transaction
    const transactionHas = await sendApproveTransaction();
    expect(transactionHas).to.have.length(66);

    // after transaction
    const secondResult = await getAllowance();
    expect(secondResult).to.eq(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );
  });
});
