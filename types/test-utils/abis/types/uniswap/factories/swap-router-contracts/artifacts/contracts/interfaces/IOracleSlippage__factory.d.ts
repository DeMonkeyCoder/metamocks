import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOracleSlippage, IOracleSlippageInterface } from "../../../../../swap-router-contracts/artifacts/contracts/interfaces/IOracleSlippage";
export declare class IOracleSlippage__factory {
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
    static createInterface(): IOracleSlippageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOracleSlippage;
}
