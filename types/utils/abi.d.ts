import { BigNumber } from "@ethersproject/bignumber";
import { BytesLike } from "@ethersproject/bytes";
export declare function keccak256(data: BytesLike): string;
export declare function encodeEthResult(abi: any, funcName: string, result: (BigNumber | string | number)[]): string;
export declare type DecodedCall = {
    inputs: any[];
    method: string;
    names: any[];
    types: any[];
};
export declare function decodeEthCall(abi: any, input: any): DecodedCall;
export declare function formatChainId(chainId: string): string;
