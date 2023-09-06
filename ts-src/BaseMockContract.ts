import {BytesLike} from '@ethersproject/bytes';
import {BaseContract} from '@ethersproject/contracts';

import MetamocksContext from './context';
import {BaseMockContractInterface, MockContractInterface} from './types';
import {decodeFunctionCall, encodeFunctionResult} from './utils/abi';

export default class BaseMockContract<T extends BaseContract> implements BaseMockContractInterface {
  abi: any[] = [];
  context: MetamocksContext;

  constructor(context: MetamocksContext, abi?: any[]) {
    this.context = context;
    if (abi) {
      this.abi = abi;
    }
  }

  async handleCall(data: BytesLike, setResult?: (result: string) => void) {
    const decoded = decodeFunctionCall(this.abi, data);
    const res: any = await (this as unknown as MockContractInterface<T>)[decoded.method](...decoded.inputs);

    const isArrayOrStructReturnType = (obj: any) => obj[0] !== undefined && typeof obj !== 'string';

    const filterRes = (arr: any[]): any[] => {
      if (!isArrayOrStructReturnType(arr)) return arr;
      const a: any[] = [];
      let i = 0;
      while (arr[i] !== undefined) {
        a.push(filterRes(arr[i]));
        i++;
      }
      return a;
    };
    const resIsStruct = isArrayOrStructReturnType(res) && !Array.isArray(res)
    const resFinal = isArrayOrStructReturnType(res) ? filterRes(res) : res;
    if (setResult) {
      setResult(encodeFunctionResult(this.abi, decoded.method as string, resIsStruct ? resFinal : [resFinal]));
    }
  }

  async handleTransaction(data: BytesLike, setResult: (arg0: string) => void) {
    await this.handleCall(data);
    setResult(this.context.getFakeTransactionHash());
  }
}
