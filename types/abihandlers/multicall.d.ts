import AbiHandler from "../abihandler";
import MetamocksContext from "../context";
export default class MulticallAbiHandler extends AbiHandler {
    methods: {
        tryBlockAndAggregate(context: MetamocksContext, decodedInput: any[]): Promise<(string | number | any[])[]>;
    };
}
