"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const abi_1 = require("./utils/abi");
class BaseAbiHandler {
    constructor(context, abi) {
        this.abi = [];
        this.context = context;
        if (abi) {
            this.abi = abi;
        }
    }
    handleCall(data, setResult) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = (0, abi_1.decodeFunctionCall)(this.abi, data);
            const res = yield this[decoded.method](...decoded.inputs);
            const isLikeArray = (obj) => obj[0] !== undefined && typeof obj !== "string";
            const filterArray = (arr) => {
                if (!isLikeArray(arr))
                    return arr;
                const a = [];
                let i = 0;
                while (arr[i] !== undefined) {
                    a.push(filterArray(arr[i]));
                    i++;
                }
                return a;
            };
            if (setResult) {
                setResult((0, abi_1.encodeFunctionResult)(this.abi, decoded.method, isLikeArray(res) ? filterArray(res) : [res]));
            }
        });
    }
    handleTransaction(data, setResult) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleCall(data);
            setResult(this.context.getFakeTransactionHash());
        });
    }
}
exports.default = BaseAbiHandler;
