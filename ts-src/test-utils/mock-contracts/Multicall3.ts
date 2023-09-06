import {BigNumber, BigNumberish} from '@ethersproject/bignumber';
import {BytesLike} from '@ethersproject/bytes';
import Multicall3ABI from '../abis/multicall3.json';
import {CallOverrides} from 'ethers';

import {isTheSameAddress, MockContract, MockContractInterface} from '../..';
import {Multicall3} from '../abis/types';

const EMPTY_DATA = '0x0000000000000000000000000000000000000000000000000000000000000000';
export default class Multicall3MockContract
  extends MockContract<Multicall3>
  implements MockContractInterface<Multicall3> {
  abi = Multicall3ABI;

  aggregate(
    calls: {
      target: string;
      callData: BytesLike;
    }[],
    overrides: CallOverrides | undefined,
  ): Promise<
    [BigNumber, string[]] & {
    blockNumber: BigNumber;
    returnData: string[];
  }
  > {
    throw Error('not implemented');
  }

  async aggregate3(
    calls: {
      target: string;
      allowFailure: boolean;
      callData: BytesLike;
    }[],
    overrides: CallOverrides | undefined,
  ): Promise<
    ([boolean, string] & {
      success: boolean;
      returnData: string;
    })[]
  > {
    const results: ([boolean, string] & {
      success: boolean;
      returnData: string;
    })[] = [];
    for (const call of calls) {
      const {target, allowFailure, callData} = call;
      let returnData = EMPTY_DATA;
      for (const contractAddress in this.context.handlers) {
        if (isTheSameAddress(contractAddress, target)) {
          try {
            await this.context.handlers[contractAddress].handleCall(callData, (r: string) => {
              returnData = r;
            });
          } catch (e) {
            console.log('123');
            console.error(e);
          }
        }
      }
      const success = returnData !== EMPTY_DATA;
      results.push(
        Object.assign(
          {
            success,
            returnData,
          },
          [success, returnData] as [boolean, string],
        ),
      );
    }

    return results;
  }

  aggregate3Value(
    calls: {
      target: string;
      allowFailure: boolean;
      value: BigNumberish;
      callData: BytesLike;
    }[],
    overrides: CallOverrides | undefined,
  ): Promise<
    ([boolean, string] & {
      success: boolean;
      returnData: string;
    })[]
  > {
    throw Error('not implemented');
  }

  blockAndAggregate(
    calls: {
      target: string;
      callData: BytesLike;
    }[],
    overrides: CallOverrides | undefined,
  ): Promise<
    [
      BigNumber,
      string,
      ([boolean, string] & {
        success: boolean;
        returnData: string;
      })[],
    ] & {
    blockNumber: BigNumber;
    blockHash: string;
    returnData: ([boolean, string] & { success: boolean; returnData: string })[];
  }
  > {
    throw Error('not implemented');
  }

  getBasefee(overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getBlockHash(blockNumber: BigNumberish, overrides: CallOverrides | undefined): Promise<string> {
    throw Error('not implemented');
  }

  getBlockNumber(overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getChainId(overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getCurrentBlockCoinbase(overrides: CallOverrides | undefined): Promise<string> {
    throw Error('not implemented');
  }

  getCurrentBlockDifficulty(overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getCurrentBlockGasLimit(overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getCurrentBlockTimestamp(overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getEthBalance(addr: string, overrides: CallOverrides | undefined): Promise<BigNumber> {
    throw Error('not implemented');
  }

  getLastBlockHash(overrides: CallOverrides | undefined): Promise<string> {
    throw Error('not implemented');
  }

  tryAggregate(
    requireSuccess: boolean,
    calls: {
      target: string;
      callData: BytesLike;
    }[],
    overrides: CallOverrides | undefined,
  ): Promise<
    ([boolean, string] & {
      success: boolean;
      returnData: string;
    })[]
  > {
    throw Error('not implemented');
  }

  tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: {
      target: string;
      callData: BytesLike;
    }[],
    overrides: CallOverrides | undefined,
  ): Promise<
    [
      BigNumber,
      string,
      ([boolean, string] & {
        success: boolean;
        returnData: string;
      })[],
    ] & {
    blockNumber: BigNumber;
    blockHash: string;
    returnData: ([boolean, string] & { success: boolean; returnData: string })[];
  }
  > {
    throw Error('not implemented');
  }
}
