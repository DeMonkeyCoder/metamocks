import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITickLens, ITickLensInterface } from "../../../../../v3-periphery/artifacts/contracts/interfaces/ITickLens";
export declare class ITickLens__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ITickLensInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITickLens;
}
