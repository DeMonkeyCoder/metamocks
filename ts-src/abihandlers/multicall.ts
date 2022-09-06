import { FAKE_BLOCK_HASH } from "../fake-tx-data";
import AbiHandler from "../abihandler";
import MetamocksContext from "../context";
import { isTheSameAddress } from "../utils";

export default class MulticallAbiHandler extends AbiHandler {
  methods = {
    async tryBlockAndAggregate(context: MetamocksContext, decodedInput: any[]) {
      const [_requireSuccess, calls] = decodedInput;
      const results: any[] = [];
      for (const call of calls) {
        const [callAddress, callInput] = call;
        for (const contractAddress in context.handlers) {
          if (isTheSameAddress(contractAddress, callAddress)) {
            await context.handlers[contractAddress].handleCall(
              context,
              callInput,
              (r: string) => results.push([true, r])
            );
          }
        }
      }
      return [0, FAKE_BLOCK_HASH, results];
    },
  };
}
