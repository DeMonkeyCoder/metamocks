import { BaseContract } from "@ethersproject/contracts";
import MetamocksContext from "./context";
import { BaseHandlerInterface } from "./types";
import { BytesLike } from "@ethersproject/bytes";
export default class BaseAbiHandler<T extends BaseContract> implements BaseHandlerInterface {
    abi: any[];
    context: MetamocksContext;
    constructor(context: MetamocksContext, abi?: any[]);
    handleCall(data: BytesLike, setResult?: (result: string) => void): Promise<void>;
    handleTransaction(data: BytesLike, setResult: (arg0: string) => void): Promise<void>;
}
