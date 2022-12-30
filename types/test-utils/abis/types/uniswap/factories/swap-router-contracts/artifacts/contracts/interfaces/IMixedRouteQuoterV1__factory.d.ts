import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMixedRouteQuoterV1, IMixedRouteQuoterV1Interface } from "../../../../../swap-router-contracts/artifacts/contracts/interfaces/IMixedRouteQuoterV1";
export declare class IMixedRouteQuoterV1__factory {
    static readonly abi: ({
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IMixedRouteQuoterV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMixedRouteQuoterV1;
}
