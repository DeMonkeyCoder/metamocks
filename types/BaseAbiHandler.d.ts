import { BaseContract } from '@ethersproject/contracts';
import MetamocksContext from './context';
import { AbiHandlerInterface } from './types';
export default class BaseAbiHandler<T extends BaseContract> implements AbiHandlerInterface<BaseContract> {
    abi: any[];
    context: MetamocksContext;
    constructor(context: MetamocksContext, abi?: any[]);
    handleCall(data: string, setResult?: (result: string) => void): Promise<void>;
    handleTransaction(data: string, setResult: (arg0: string) => void): Promise<void>;
}
