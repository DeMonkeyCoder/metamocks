import {expect} from "chai";
import MetaMocks from "../ts-src";
import {JsonRpcProvider} from "@ethersproject/providers";
import {Wallet} from "@ethersproject/wallet";
import {Erc20AbiHandlerAllowAll} from "./test-utils/abihandlers/Erc20";
import {Erc20} from "./test-utils/abis/types";
import {
    CHAIN_ID,
    TEST_ADDRESS_NEVER_USE,
    TEST_CONTRACT_ADDRESS,
    TEST_CONTRACT_ADDRESS2,
    TEST_PRIVATE_KEY
} from "./test-utils/data";
import {encodeFunctionData} from "../ts-src/utils/abi";

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
        const res = metamocks.send('eth_call', [{to: TEST_CONTRACT_ADDRESS, data: allowanceCall}, 1])
        const callRes = await res;
        expect(callRes).to.eq('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
    })
});
