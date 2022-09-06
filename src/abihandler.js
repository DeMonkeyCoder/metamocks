"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abi_1 = require("./utils/abi");
class AbiHandler {
    constructor(abi) {
        this.abi = [];
        this.methods = {};
        if (abi) {
            this.abi = abi;
        }
    }
    async handleCall(context, data, setResult) {
        const decoded = (0, abi_1.decodeEthCall)(this.abi, data);
        if (decoded.method === "multicall") {
            const [deadline, [methodData]] = decoded.inputs;
            await this.handleCall(context, methodData, setResult);
            return;
        }
        const method = this.methods[decoded.method];
        if (method) {
            const res = await method(context, decoded.inputs);
            setResult === null || setResult === void 0 ? void 0 : setResult((0, abi_1.encodeEthResult)(this.abi, decoded.method, res));
        }
    }
    async handleTransaction(context, data, setResult) {
        await this.handleCall(context, data);
        setResult(context.getFakeTransactionHash());
    }
}
exports.default = AbiHandler;
