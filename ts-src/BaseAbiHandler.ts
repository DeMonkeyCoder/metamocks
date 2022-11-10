import { BaseContract } from '@ethersproject/contracts';

import MetamocksContext from './context';
import {AbiHandlerInterface, BaseHandlerInterface} from './types';
import { decodeFunctionCall, encodeFunctionResult } from './utils/abi';

export default class BaseAbiHandler<T extends BaseContract> implements BaseHandlerInterface {
  abi: any[] = [];
  context: MetamocksContext;

  constructor(context: MetamocksContext, abi?: any[]) {
    this.context = context;
    if (abi) {
      this.abi = abi;
    }
  }

  async handleCall(data: string, setResult?: (result: string) => void) {
    const decoded = decodeFunctionCall<T>(this.abi, data);
    const res: any = await (this as unknown as AbiHandlerInterface<T>)[decoded.method](decoded.inputs);
    if (setResult) {
      setResult(encodeFunctionResult(this.abi, decoded.method as string, res));
    }
  }

  async handleTransaction(data: string, setResult: (arg0: string) => void) {
    await this.handleCall(data);
    setResult(this.context.getFakeTransactionHash());
  }
}
