import {BigNumber} from "@ethersproject/bignumber";
import MulticallJson
  from "@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json";
import {MockContract, MockContractInterface, isTheSameAddress} from "../..";

import {CallOverrides} from "ethers";
import {UniswapInterfaceMulticall} from "../abis/types/uniswap";

const {abi: MulticallABI} = MulticallJson;

const EMPTY_DATA =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export default class MulticallUniswapMockContract
  extends MockContract<UniswapInterfaceMulticall>
  implements MockContractInterface<UniswapInterfaceMulticall> {
  abi = MulticallABI;

  getCurrentBlockTimestamp(
    overrides: CallOverrides | undefined
  ): Promise<BigNumber> {
    return Promise.resolve(BigNumber.from(1672356726));
  }

  getEthBalance(
    addr: string,
    overrides: CallOverrides | undefined
  ): Promise<BigNumber> {
    return Promise.resolve(BigNumber.from(10).pow(22));
  }

  // TODO: handle "success = false"
  async multicall(
    calls: UniswapInterfaceMulticall.CallStruct[],
    overrides: CallOverrides | undefined
  ): Promise<[BigNumber, UniswapInterfaceMulticall.ResultStructOutput[]] & {
    blockNumber: BigNumber;
    returnData: UniswapInterfaceMulticall.ResultStructOutput[];
  }> {
    const results: UniswapInterfaceMulticall.ResultStructOutput[] = [];
    for (const call of calls) {
      const {target, gasLimit, callData} = call;
      let returnData = EMPTY_DATA;
      let success = false;
      for (const contractAddress in this.context.handlers) {
        if (isTheSameAddress(contractAddress, target)) {
          try {
            await this.context.handlers[contractAddress].handleCall(
              callData,
              (r: string) => {
                returnData = r;
              }
            );
            success = true;
          } catch (e) {
            console.error(e);
          }
        }
      }
      const res = Object.assign(
        {
          success,
          gasUsed: BigNumber.from(gasLimit),
          returnData,
        },
        [success, BigNumber.from(gasLimit), returnData]
      ) as UniswapInterfaceMulticall.ResultStructOutput;
      results.push(res);
    }
    return Object.assign(
      {
        blockNumber: BigNumber.from(this.context.getLatestBlock().number),
        returnData: results,
      },
      [BigNumber.from(this.context.getLatestBlock().number), results]
    ) as [BigNumber, UniswapInterfaceMulticall.ResultStructOutput[]] & {
      blockNumber: BigNumber;
      returnData: UniswapInterfaceMulticall.ResultStructOutput[];
    };
  }
}
