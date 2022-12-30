import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INonfungibleTokenPositionDescriptor, INonfungibleTokenPositionDescriptorInterface } from "../../../../../v3-periphery/artifacts/contracts/interfaces/INonfungibleTokenPositionDescriptor";
export declare class INonfungibleTokenPositionDescriptor__factory {
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
    static createInterface(): INonfungibleTokenPositionDescriptorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INonfungibleTokenPositionDescriptor;
}
