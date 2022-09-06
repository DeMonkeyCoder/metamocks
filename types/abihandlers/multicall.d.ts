import AbiHandler from "../abihandler";
import MetamocksContext from "../context";
export declare class BaseMulticallHandler extends AbiHandler {
    methods: {
        tryBlockAndAggregate(context: MetamocksContext, decodedInput: any[]): Promise<(string | number | any[])[]>;
    };
}
