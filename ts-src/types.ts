import { BytesLike } from '@ethersproject/bytes';
import { BaseContract } from '@ethersproject/contracts';

import { MetamocksContext } from './index';

export declare type BaseMockContractInterface = {
  abi: any[];
  context: MetamocksContext;
  handleCall(data: BytesLike, setResult?: (result: string) => void): Promise<void>;
  handleTransaction(data: BytesLike, setResult: (arg0: string) => void): Promise<void>;
};
export declare type MockContractMethods<T extends BaseContract> = T['callStatic'];
export declare type MockContractInterface<T extends BaseContract> = MockContractMethods<T> & BaseMockContractInterface;
