import { BaseContract } from "@ethersproject/contracts";
import MetamocksContext from "./context";
import { BaseMockContractInterface } from "./types";
import { BytesLike } from "@ethersproject/bytes";
export default class BaseMockContract<T extends BaseContract> implements BaseMockContractInterface {
    abi: any[];
    context: MetamocksContext;
    constructor(context: MetamocksContext, abi?: any[]);
    handleCall(data: BytesLike, setResult?: (result: string) => void): Promise<void>;
    handleTransaction(data: BytesLike, setResult: (arg0: string) => void): Promise<void>;
}
