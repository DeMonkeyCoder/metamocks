import { BigNumber } from '@ethersproject/bignumber';
import { BytesLike, hexStripZeros } from '@ethersproject/bytes';
import { BaseContract } from '@ethersproject/contracts';
import { ethers } from 'ethers';

const InputDataDecoder = require('ethereum-input-data-decoder');

export function keccak256(data: BytesLike): string {
  return ethers.utils.keccak256(data);
}

export function encodeEthResult<T extends BaseContract>(
  abi: any,
  funcName: string,
  result: (BigNumber | string | number)[],
) {
  const iface = new ethers.utils.Interface(abi);
  return iface.encodeFunctionResult(funcName, result);
}

export type DecodedCall<T extends BaseContract> = {
  inputs: any[];
  method: keyof T['functions'];
  names: any[];
  types: any[];
};

export function decodeEthCall<T extends BaseContract>(abi: any, input: any): DecodedCall<T> {
  const decoder = new InputDataDecoder(abi);
  return decoder.decodeData(input);
}

export function formatChainId(chainId: string) {
  return hexStripZeros(BigNumber.from(chainId).toHexString());
}
