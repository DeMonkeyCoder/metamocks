import { BaseContract } from '@ethersproject/contracts';

import { MetamocksContext } from './index';

export type BaseHandlerInterface = {
  abi: any[];
  context: MetamocksContext;
  handleCall(data: string, setResult?: (result: string) => void): Promise<void>;
  handleTransaction(data: string, setResult: (arg0: string) => void): Promise<void>;
};

export type ContractMethods<T extends BaseContract> = BaseContract extends T ? {} : T['callStatic'];

// export type ContractFunctionParameters<T> = T extends (...args: infer P) => any ? P : never;
export type ContractFunctionReturnType<T> = T extends (...args: any) => Promise<infer R>
  ? // TODO: handle struct return type
    Promise<R extends [...params: any[]] ? any[] : [R]>
  : any;
export type AbiHandlerMethods<T extends BaseContract> = {
  [methodName in keyof ContractMethods<T>]: (
    decodedInput: any[],
  ) => ContractFunctionReturnType<ContractMethods<T>[methodName]>;
};

export type AbiHandlerInterface<T extends BaseContract> = AbiHandlerMethods<T> & BaseHandlerInterface;
