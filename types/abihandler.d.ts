import MetamocksContext from "./context";
export default class AbiHandler {
    abi: any[];
    methods: {
        [name: string]: (...args: any[]) => any;
    };
    constructor(abi?: any);
    handleCall(context: MetamocksContext, data: string, setResult?: (arg0: string) => void): Promise<void>;
    handleTransaction(context: MetamocksContext, data: string, setResult: (arg0: string) => void): Promise<void>;
}
