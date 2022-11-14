import { BigNumber } from "@ethersproject/bignumber";
import MulticallJson from "@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json";
import {
  AbiHandler,
  AbiHandlerInterface,
  decodeFunctionCall,
  encodeFunctionResult,
  isTheSameAddress,
} from "../../index";

import { UniswapInterfaceMulticall } from "../abis/types/uniswap";

const { abi: MulticallABI } = MulticallJson;

export default class MulticallUniswapAbiHandler
  extends AbiHandler<UniswapInterfaceMulticall>
  implements AbiHandlerInterface<UniswapInterfaceMulticall>
{
  abi = MulticallABI;

  getCurrentBlockTimestamp(decodedInput: any[]): Promise<[BigNumber]> {
    throw new Error("Method not implemented.");
  }

  getEthBalance(decodedInput: any[]): Promise<[BigNumber]> {
    throw new Error("Method not implemented.");
  }

  async multicall(decodedInput: any[]) {
    const [calls] = decodedInput;
    const results: any[] = [];
    for (const call of calls) {
      const [callAddress, gasEstimated, callInput] = call;
      for (const contractAddress in this.context.handlers) {
        if (isTheSameAddress(contractAddress, callAddress)) {
          await this.context.handlers[contractAddress].handleCall(
            callInput,
            (r: string) => results.push([true, gasEstimated, r])
          );
        }
      }
    }
    return [this.context.getLatestBlock().number, results];
  }

  async handleCall(data: string, setResult?: (result: string) => void) {
    const decoded = decodeFunctionCall<UniswapInterfaceMulticall>(
      this.abi,
      data
    );
    const res: any = await this[decoded.method](decoded.inputs);
    setResult?.(encodeFunctionResult(this.abi, decoded.method as string, res));
  }
}
