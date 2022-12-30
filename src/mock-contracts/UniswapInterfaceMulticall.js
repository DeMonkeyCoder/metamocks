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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const UniswapInterfaceMulticall_json_1 = __importDefault(require("@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json"));
const index_1 = require("../index");
const { abi: MulticallABI } = UniswapInterfaceMulticall_json_1.default;
const EMPTY_DATA = "0x0000000000000000000000000000000000000000000000000000000000000000";
class MulticallUniswapAbiHandler extends index_1.MockContract {
    constructor() {
        super(...arguments);
        this.abi = MulticallABI;
    }
    getCurrentBlockTimestamp(overrides) {
        return Promise.resolve(bignumber_1.BigNumber.from(1672356726));
    }
    getEthBalance(addr, overrides) {
        return Promise.resolve(bignumber_1.BigNumber.from(10).pow(22));
    }
    multicall(calls, overrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (const call of calls) {
                const { target, gasLimit, callData } = call;
                let returnData = EMPTY_DATA;
                for (const contractAddress in this.context.handlers) {
                    if ((0, index_1.isTheSameAddress)(contractAddress, target)) {
                        try {
                            yield this.context.handlers[contractAddress].handleCall(callData, (r) => {
                                returnData = r;
                            });
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }
                }
                const success = returnData !== EMPTY_DATA;
                const res = Object.assign({
                    success,
                    gasUsed: bignumber_1.BigNumber.from(gasLimit),
                    returnData,
                }, [success, bignumber_1.BigNumber.from(gasLimit), returnData]);
                results.push(res);
            }
            return Object.assign({
                blockNumber: bignumber_1.BigNumber.from(this.context.getLatestBlock().number),
                returnData: results,
            }, [bignumber_1.BigNumber.from(this.context.getLatestBlock().number), results]);
        });
    }
}
exports.default = MulticallUniswapAbiHandler;
