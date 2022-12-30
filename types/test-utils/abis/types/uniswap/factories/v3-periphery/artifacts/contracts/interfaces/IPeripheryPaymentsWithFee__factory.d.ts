import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeripheryPaymentsWithFee, IPeripheryPaymentsWithFeeInterface } from "../../../../../v3-periphery/artifacts/contracts/interfaces/IPeripheryPaymentsWithFee";
export declare class IPeripheryPaymentsWithFee__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IPeripheryPaymentsWithFeeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeripheryPaymentsWithFee;
}
