"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMulticallHandler = void 0;
const fake_tx_data_1 = require("../fake-tx-data");
const abihandler_1 = __importDefault(require("../abihandler"));
function isTheSameAddress(address1, address2) {
    return address1.toLowerCase() === address2.toLowerCase();
}
class BaseMulticallHandler extends abihandler_1.default {
    constructor() {
        super(...arguments);
        this.methods = {
            async tryBlockAndAggregate(context, decodedInput) {
                const [_requireSuccess, calls] = decodedInput;
                const results = [];
                for (const call of calls) {
                    const [callAddress, callInput] = call;
                    for (const contractAddress in context.handlers) {
                        if (isTheSameAddress(contractAddress, callAddress)) {
                            await context.handlers[contractAddress].handleCall(context, callInput, (r) => results.push([true, r]));
                        }
                    }
                }
                return [0, fake_tx_data_1.FAKE_BLOCK_HASH, results];
            },
        };
    }
}
exports.BaseMulticallHandler = BaseMulticallHandler;
