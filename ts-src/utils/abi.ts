import {BigNumber} from '@ethersproject/bignumber';
import {BytesLike, hexStripZeros} from '@ethersproject/bytes';
import {BaseContract} from '@ethersproject/contracts';
import {ethers} from 'ethers';

const InputDataDecoder = require('ethereum-input-data-decoder');

export function keccak256(data: BytesLike): string {
    return ethers.utils.keccak256(data);
}

export function encodeFunctionResult<T extends BaseContract>(
    abi: any,
    funcName: string,
    result: (BigNumber | string | number)[],
) {
    const iface = new ethers.utils.Interface(abi);
    return iface.encodeFunctionResult(funcName, result);
}

export function decodeFunctionResult<T extends BaseContract>(
    abi: any,
    funcName: string,
    result: BytesLike,
) {
    const iface = new ethers.utils.Interface(abi);
    return iface.decodeFunctionResult(funcName, result);
}

export type DecodedCall<T extends BaseContract> = {
    inputs: any[];
    method: keyof T['functions'];
    names: any[];
    types: any[];
};


export function encodeFunctionData<T extends BaseContract>(
    abi: any,
    funcName: string,
    values?: ReadonlyArray<any>,
) {
    const iface = new ethers.utils.Interface(abi);
    return iface.encodeFunctionData(funcName, values);
}

export function decodeFunctionCall<T extends BaseContract>(abi: any, input: any): DecodedCall<T> {
    const decoder = new InputDataDecoder(abi);
    return decoder.decodeData(input);
}

export function formatChainId(chainId: string) {
    return hexStripZeros(BigNumber.from(chainId).toHexString());
}
