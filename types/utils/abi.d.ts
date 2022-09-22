import { BigNumber } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';
import { BaseContract } from '@ethersproject/contracts';
export declare function keccak256(data: BytesLike): string;
export declare function encodeEthResult<T extends BaseContract>(abi: any, funcName: string, result: (BigNumber | string | number)[]): string;
export declare type DecodedCall<T extends BaseContract> = {
    inputs: any[];
    method: keyof T['functions'];
    names: any[];
    types: any[];
};
export declare function decodeEthCall<T extends BaseContract>(abi: any, input: any): DecodedCall<T>;
export declare function formatChainId(chainId: string): string;
