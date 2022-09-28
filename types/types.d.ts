import { BaseContract } from '@ethersproject/contracts';
import { MetamocksContext } from './index';
export declare type BaseHandlerInterface = {
    abi: any[];
    context: MetamocksContext;
    handleCall(data: string, setResult?: (result: string) => void): Promise<void>;
    handleTransaction(data: string, setResult: (arg0: string) => void): Promise<void>;
};
export declare type ContractMethods<T extends BaseContract> = BaseContract extends T ? {} : T['callStatic'];
export declare type ContractFunctionReturnType<T> = T extends (...args: any) => Promise<infer R> ? Promise<R extends [...params: any[]] ? any[] : (R extends void ? void : [R])> : any;
export declare type AbiHandlerMethods<T extends BaseContract> = {
    [methodName in keyof ContractMethods<T>]: (decodedInput: any[]) => ContractFunctionReturnType<ContractMethods<T>[methodName]>;
};
export declare type AbiHandlerInterface<T extends BaseContract> = AbiHandlerMethods<T> & BaseHandlerInterface;
