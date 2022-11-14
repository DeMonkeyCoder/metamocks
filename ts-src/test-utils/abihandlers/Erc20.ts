import { BigNumber } from "@ethersproject/bignumber";
import { MaxUint256, Zero } from "@ethersproject/constants";
import { AbiHandler, AbiHandlerInterface } from "../../index";

import ERC20_ABI from "../abis/erc20.json";
import { Erc20 } from "../abis/types";
import { TEST_CONTRACT_ADDRESS, TOKEN_BALANCE } from "../data";

export const tokenBalance = BigNumber.from(10).pow(16);

export class Erc20AbiHandler
  extends AbiHandler<Erc20>
  implements AbiHandlerInterface<Erc20>
{
  abi = ERC20_ABI;
  allowedList: string[] = [];

  name(decodedInput: any[]): Promise<[string]> {
    throw new Error("Method not implemented.");
  }

  async approve(decodedInput: any[]): Promise<[true] | [false]> {
    const [spender, _value] = decodedInput;
    this.allowedList.push(spender);
    return [true];
  }

  totalSupply(decodedInput: any[]): Promise<[BigNumber]> {
    throw new Error("Method not implemented.");
  }

  transferFrom(decodedInput: any[]): Promise<[true] | [false]> {
    throw new Error("Method not implemented.");
  }

  decimals(decodedInput: any[]): Promise<[number]> {
    throw new Error("Method not implemented.");
  }

  async balanceOf(decodedInput: any[]): Promise<[BigNumber]> {
    const [_owner] = decodedInput;
    return [TOKEN_BALANCE];
  }

  symbol(decodedInput: any[]): Promise<[string]> {
    throw new Error("Method not implemented.");
  }

  transfer(decodedInput: any[]): Promise<[true] | [false]> {
    throw new Error("Method not implemented.");
  }

  async allowance(decodedInput: any[]): Promise<[BigNumber]> {
    const [_owner, spender] = decodedInput;
    return [this.allowedList.includes(spender) ? MaxUint256 : Zero];
  }
}

export class Erc20AbiHandlerAllowAll extends Erc20AbiHandler {
  async allowance(decodedInput: any[]): Promise<[BigNumber]> {
    const [_onwer, spender] = decodedInput;
    if ("0x" + spender === TEST_CONTRACT_ADDRESS) {
      return [MaxUint256];
    }
    return [Zero];
  }
}
