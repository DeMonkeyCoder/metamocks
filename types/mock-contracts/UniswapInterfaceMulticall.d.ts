import { BigNumber } from "@ethersproject/bignumber";
import { MockContract, MockContractInterface } from "../index";
import { UniswapInterfaceMulticall } from "../test-utils/abis/types/uniswap";
import { CallOverrides } from "ethers";
export default class MulticallUniswapAbiHandler extends MockContract<UniswapInterfaceMulticall> implements MockContractInterface<UniswapInterfaceMulticall> {
    abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        stateMutability: string;
        type: string;
    })[];
    getCurrentBlockTimestamp(overrides: CallOverrides | undefined): Promise<BigNumber>;
    getEthBalance(addr: string, overrides: CallOverrides | undefined): Promise<BigNumber>;
    multicall(calls: UniswapInterfaceMulticall.CallStruct[], overrides: CallOverrides | undefined): Promise<[BigNumber, UniswapInterfaceMulticall.ResultStructOutput[]] & {
        blockNumber: BigNumber;
        returnData: UniswapInterfaceMulticall.ResultStructOutput[];
    }>;
}
