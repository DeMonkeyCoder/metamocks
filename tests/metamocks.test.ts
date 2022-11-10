import {expect} from "chai";
import MetaMocks from "../ts-src";
import {JsonRpcProvider} from "@ethersproject/providers";
import {Wallet} from "@ethersproject/wallet";
import {Erc20AbiHandler, Erc20AbiHandlerAllowAll} from "./test-utils/abihandlers/Erc20";
import {Erc20} from "./test-utils/abis/types";
import {
    CHAIN_ID,
    TEST_ADDRESS_NEVER_USE,
    TEST_CONTRACT_ADDRESS,
    TEST_CONTRACT_ADDRESS2,
    TEST_PRIVATE_KEY
} from "./test-utils/data";
import {encodeFunctionData} from "../ts-src/utils/abi";
import {MaxUint256} from "@ethersproject/constants";

describe("Metamocks", () => {

    let metamocks: MetaMocks;
    beforeEach(() => {
        const provider = new JsonRpcProvider(
            "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            CHAIN_ID
        );
        const signer = new Wallet(TEST_PRIVATE_KEY, provider);
        metamocks = new MetaMocks(signer, CHAIN_ID);
    })

    it('can get instance', () => {
        expect(metamocks).not.to.be.null;
    })

    it('can get accounts', async () => {
        const res = await metamocks.send('eth_requestAccounts', [])
        expect(res[0]).to.eq(TEST_ADDRESS_NEVER_USE);
    })

    it("can get chain id", async () => {
        const res = await metamocks.send('eth_chainId', [])
        expect(res).to.eq('0x' + CHAIN_ID.toString(16));
    });

    it("can get blockNumber", async () => {
        const res = await metamocks.send('eth_blockNumber', [])
        expect(res).to.be.gt(0);
    });

    it("can read data from test contract", async () => {
        const erc20AbiHandler = metamocks.registerAbiHandler<Erc20>(TEST_CONTRACT_ADDRESS, Erc20AbiHandlerAllowAll)
        const allowanceCall = encodeFunctionData(erc20AbiHandler.abi, 'allowance', [TEST_ADDRESS_NEVER_USE, TEST_CONTRACT_ADDRESS2])
        const res = await metamocks.send('eth_call', [{to: TEST_CONTRACT_ADDRESS, data: allowanceCall}, 1])
        expect(res).to.eq('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
    })


    it("can send transaction to the test contract", async () => {
        const erc20AbiHandler = metamocks.registerAbiHandler<Erc20>(TEST_CONTRACT_ADDRESS, Erc20AbiHandler)

        // before transaction
        const firstAllowanceCall = encodeFunctionData(erc20AbiHandler.abi, 'allowance', [TEST_ADDRESS_NEVER_USE, TEST_CONTRACT_ADDRESS2])
        const firstResult = await metamocks.send('eth_call', [{to: TEST_CONTRACT_ADDRESS, data: firstAllowanceCall}, 1])
        expect(firstResult).to.eq('0x0000000000000000000000000000000000000000000000000000000000000000')


        // transaction
        const approveTransaction = encodeFunctionData(erc20AbiHandler.abi, 'approve', [TEST_CONTRACT_ADDRESS2, MaxUint256])
        const transactionHas = await metamocks.send('eth_sendTransaction', [{
            to: TEST_CONTRACT_ADDRESS,
            data: approveTransaction
        }, 1])
        expect(transactionHas).to.have.length(66)

        // after transaction
        const secondAllowanceCall = encodeFunctionData(erc20AbiHandler.abi, 'allowance', [TEST_ADDRESS_NEVER_USE, TEST_CONTRACT_ADDRESS2])
        const secondResult = await metamocks.send('eth_call', [{
            to: TEST_CONTRACT_ADDRESS,
            data: secondAllowanceCall
        }, 1])
        expect(secondResult).to.eq('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
    })
});
