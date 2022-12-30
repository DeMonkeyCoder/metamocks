import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMulticall, IMulticallInterface } from "../../../../../v3-periphery/artifacts/contracts/interfaces/IMulticall";
export declare class IMulticall__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IMulticallInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMulticall;
}
