import { BigNumber } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';
import { BaseContract } from '@ethersproject/contracts';
import { ethers } from 'ethers';
export declare function keccak256(data: BytesLike): string;
export declare function encodeFunctionResult<T extends BaseContract>(abi: any, funcName: string, result: (BigNumber | string | number)[]): string;
export declare function decodeFunctionResult<T extends BaseContract>(abi: any, funcName: string, result: BytesLike): ethers.utils.Result;
export declare type DecodedCall<T extends BaseContract> = {
    inputs: any[];
    method: keyof T['functions'];
    names: any[];
    types: any[];
};
export declare function encodeFunctionData<T extends BaseContract>(abi: any, funcName: string, values?: ReadonlyArray<any>): string;
export declare function decodeFunctionCall<T extends BaseContract>(abi: any, input: any): DecodedCall<T>;
export declare function formatChainId(chainId: string): string;
