import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3Factory, IUniswapV3FactoryInterface } from "../../../../../v3-core/artifacts/contracts/interfaces/IUniswapV3Factory";
export declare class IUniswapV3Factory__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IUniswapV3FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3Factory;
}
