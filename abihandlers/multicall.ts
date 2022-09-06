import {FAKE_BLOCK_HASH} from '../fake-tx-data';
import AbiHandler from '../abihandler';
import MetamocksContext from "../context";

function isTheSameAddress(address1: string, address2: string) {
  return address1.toLowerCase() === address2.toLowerCase();
}

export class BaseMulticallHandler extends AbiHandler {
  methods = {
    async tryBlockAndAggregate(context: MetamocksContext, decodedInput: any[]) {
      const [_requireSuccess, calls] = decodedInput;
      const results: any[] = [];
      for (const call of calls) {
        const [callAddress, callInput] = call;
        for (const contractAddress in context.handlers) {
          if (isTheSameAddress(contractAddress, callAddress)) {
            await context.handlers[contractAddress].handleCall(context, callInput, (r: string) =>
              results.push([true, r]),
            );
          }
        }
      }
      return [0, FAKE_BLOCK_HASH, results];
    },
  };
}
