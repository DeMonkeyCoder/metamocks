"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_1 = require("@ethersproject/bignumber");
var experimental_1 = require("@ethersproject/experimental");
var context_1 = __importDefault(require("./context"));
var enums_1 = require("./enums");
var fake_tx_data_1 = require("./fake-tx-data");
var messages_1 = require("./messages");
var utils_1 = require("./utils");
var abi_1 = require("./utils/abi");
var MetaMocks = /** @class */ (function (_super) {
    __extends(MetaMocks, _super);
    function MetaMocks(signer, chainId, supportedChainIds, provider) {
        var _a;
        var _this = _super.call(this, signer, provider) || this;
        _this.eventListeners = (_a = {},
            _a[enums_1.EventHandlerKey.CHAIN_CHANGED] = function handleChainChanged(chainId) { },
            _a[enums_1.EventHandlerKey.ACCOUNTS_CHANGED] = function handleAccountsChanged(accounts) { },
            _a[enums_1.EventHandlerKey.CLOSE] = function handleClose(code, reason) { },
            _a[enums_1.EventHandlerKey.NETWORK_CHANGED] = function handleNetworkChanged(networkId) { },
            _a);
        _this.transactionStatus = enums_1.TransactionStatus.SUCCESS;
        _this.transactionWaitTime = 0;
        _this.context = new context_1.default(chainId, supportedChainIds);
        return _this;
    }
    MetaMocks.prototype.setTransactionStatus = function (status) {
        this.transactionStatus = status;
    };
    MetaMocks.prototype.setTransactionWaitTime = function (waitTime) {
        this.transactionWaitTime = waitTime;
    };
    MetaMocks.prototype.on = function (eventName, listener) {
        var found = false;
        for (var _i = 0, _a = (0, utils_1.enumKeys)(enums_1.EventHandlerKey); _i < _a.length; _i++) {
            var k = _a[_i];
            if (eventName === enums_1.EventHandlerKey[k]) {
                found = true;
                this.eventListeners[eventName] = listener;
                break;
            }
        }
        if (!found) {
            throw Error("Bridge: Unknown Event Key ".concat(String(eventName)));
        }
        return this;
    };
    MetaMocks.prototype.switchEthereumChainSpy = function (chainId) { };
    MetaMocks.prototype.addEthereumChainSpy = function (chainId) { };
    MetaMocks.prototype.registerAbiHandler = function (address, handlerClass) {
        var handler = new handlerClass(this.context);
        this.context.setHandler(address, handler);
        return handler;
    };
    MetaMocks.prototype.sendAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send.apply(this, args)];
            });
        });
    };
    MetaMocks.prototype.getSendArgs = function (args) {
        var isCallbackForm = typeof args[0] === 'object' && typeof args[1] === 'function';
        var callback;
        var method;
        var params;
        if (isCallbackForm) {
            callback = args[1];
            method = args[0].method;
            params = args[0].params;
        }
        else {
            method = args[0];
            params = args[1];
        }
        return {
            isCallbackForm: isCallbackForm,
            callback: callback,
            method: method,
            params: params,
        };
    };
    MetaMocks.prototype.send = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            function setResult(r) {
                result = r;
                resultIsSet = true;
            }
            function setError(e) {
                runError = e;
                errorIsSet = true;
            }
            var _a, isCallbackForm, callback, method, params, result, resultIsSet, runError, errorIsSet, _b, chainId, error, blockNumber, returnFullHashes, transactionHash, transactionHash_1, latestBlock, resultLocal, _c, _d, _e, contractAddress, _f, _g, _h, _j, _k, contractAddress, _l, _m, result_1, error_1;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        _a = this.getSendArgs(args), isCallbackForm = _a.isCallbackForm, callback = _a.callback, method = _a.method, params = _a.params;
                        result = null;
                        resultIsSet = false;
                        runError = null;
                        errorIsSet = false;
                        if (!(method === 'eth_requestAccounts' || method === 'eth_accounts')) return [3 /*break*/, 2];
                        _b = setResult;
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        _b.apply(void 0, [[_o.sent()]]);
                        _o.label = 2;
                    case 2:
                        if (method === 'wallet_switchEthereumChain') {
                            this.switchEthereumChainSpy(params[0].chainId);
                            if (this.context.supportedChainIds.includes(params[0].chainId)) {
                                this.context.chainId = params[0].chainId;
                                this.eventListeners[enums_1.EventHandlerKey.NETWORK_CHANGED](params[0].chainId);
                                this.eventListeners[enums_1.EventHandlerKey.CHAIN_CHANGED](params[0].chainId);
                                setResult(null);
                            }
                            else {
                                chainId = params[0].chainId;
                                error = {
                                    code: 4902,
                                    message: "Unrecognized chain ID \"".concat(chainId, "\". Try adding the chain using wallet_addEthereumChain first."),
                                };
                                setError(error);
                            }
                        }
                        if (method === 'wallet_addEthereumChain') {
                            this.addEthereumChainSpy(params[0].chainId);
                            this.context.supportedChainIds.push(params[0].chainId);
                            setResult(null);
                        }
                        if (method === 'eth_chainId') {
                            setResult((0, abi_1.formatChainId)(String(this.context.chainId)));
                        }
                        if (method === 'eth_getBlockByNumber') {
                            if (params[0] === 'latest') {
                                setResult(this.context.getLatestBlock());
                            }
                            else {
                                blockNumber = params[0], returnFullHashes = params[1];
                                setResult(Object.assign(fake_tx_data_1.fakeBlockByNumberResponse, {
                                    number: bignumber_1.BigNumber.from(blockNumber).toNumber(),
                                }));
                            }
                        }
                        if (method === 'eth_getTransactionByHash') {
                            transactionHash = params[0];
                            setResult(Object.assign(fake_tx_data_1.fakeTransactionByHashResponse, {
                                hash: transactionHash,
                            }));
                        }
                        if (method === 'eth_getTransactionReceipt') {
                            transactionHash_1 = params[0];
                            latestBlock = this.context.getLatestBlock();
                            resultLocal = Object.assign(fake_tx_data_1.fakeTransactionReceipt, {
                                transactionHash: transactionHash_1,
                                blockHash: latestBlock.hash,
                                blockNumber: latestBlock.number,
                                logs: fake_tx_data_1.fakeTransactionReceipt.logs.map(function (log) { return Object.assign(log, transactionHash_1); }),
                            });
                            setResult(resultLocal);
                        }
                        if (method === 'eth_blockNumber') {
                            setResult(this.context.getLatestBlock().number);
                        }
                        if (!(method === 'eth_call')) return [3 /*break*/, 6];
                        _c = [];
                        for (_d in this.context.handlers)
                            _c.push(_d);
                        _e = 0;
                        _o.label = 3;
                    case 3:
                        if (!(_e < _c.length)) return [3 /*break*/, 6];
                        contractAddress = _c[_e];
                        if (!(0, utils_1.isTheSameAddress)(contractAddress, params[0].to)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.context.handlers[contractAddress].handleCall(params[0].data, setResult)];
                    case 4:
                        _o.sent();
                        _o.label = 5;
                    case 5:
                        _e++;
                        return [3 /*break*/, 3];
                    case 6:
                        if (!(method === 'eth_estimateGas')) return [3 /*break*/, 9];
                        if (!(this.transactionStatus === enums_1.TransactionStatus.INSUFFICIENT_FUND)) return [3 /*break*/, 8];
                        _f = setError;
                        _g = messages_1.getInsufficientFundGasEstimateError;
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 7:
                        _f.apply(void 0, [_g.apply(void 0, [_o.sent()])]);
                        return [3 /*break*/, 9];
                    case 8:
                        setResult('0xba7f');
                        _o.label = 9;
                    case 9:
                        if (!(method === 'eth_sendTransaction')) return [3 /*break*/, 20];
                        _h = [];
                        for (_j in this.context.handlers)
                            _h.push(_j);
                        _k = 0;
                        _o.label = 10;
                    case 10:
                        if (!(_k < _h.length)) return [3 /*break*/, 13];
                        contractAddress = _h[_k];
                        if (!(0, utils_1.isTheSameAddress)(contractAddress, params[0].to)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.context.handlers[contractAddress].handleTransaction(params[0].data, setResult)];
                    case 11:
                        _o.sent();
                        _o.label = 12;
                    case 12:
                        _k++;
                        return [3 /*break*/, 10];
                    case 13:
                        if (!(this.transactionStatus === enums_1.TransactionStatus.SUCCESS)) return [3 /*break*/, 14];
                        setResult(this.context.getFakeTransactionHash());
                        return [3 /*break*/, 18];
                    case 14:
                        if (!(this.transactionStatus === enums_1.TransactionStatus.USER_DENIED)) return [3 /*break*/, 15];
                        setError(messages_1.userDeniedTransactionError);
                        return [3 /*break*/, 18];
                    case 15:
                        if (!(this.transactionStatus === enums_1.TransactionStatus.INSUFFICIENT_FUND)) return [3 /*break*/, 17];
                        _l = setError;
                        _m = messages_1.getInsufficientFundTransactionError;
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 16:
                        _l.apply(void 0, [_m.apply(void 0, [_o.sent()])]);
                        return [3 /*break*/, 18];
                    case 17:
                        setError({ error: { message: messages_1.SAMPLE_ERROR_MESSAGE } });
                        _o.label = 18;
                    case 18:
                        if (!this.transactionWaitTime) return [3 /*break*/, 20];
                        return [4 /*yield*/, (0, utils_1.sleep)(this.transactionWaitTime)];
                    case 19:
                        _o.sent();
                        _o.label = 20;
                    case 20:
                        if (!errorIsSet) return [3 /*break*/, 21];
                        if (isCallbackForm) {
                            callback(runError, null);
                        }
                        else {
                            throw runError;
                        }
                        return [3 /*break*/, 25];
                    case 21:
                        if (!resultIsSet) return [3 /*break*/, 22];
                        if (isCallbackForm) {
                            callback(null, { result: result });
                        }
                        else {
                            return [2 /*return*/, result];
                        }
                        return [3 /*break*/, 25];
                    case 22:
                        _o.trys.push([22, 24, , 25]);
                        return [4 /*yield*/, _super.prototype.send.call(this, method, params)];
                    case 23:
                        result_1 = _o.sent();
                        if (isCallbackForm) {
                            callback(null, { result: result_1 });
                        }
                        else {
                            return [2 /*return*/, result_1];
                        }
                        return [3 /*break*/, 25];
                    case 24:
                        error_1 = _o.sent();
                        if (isCallbackForm) {
                            callback(error_1, null);
                        }
                        else {
                            throw error_1;
                        }
                        return [3 /*break*/, 25];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    return MetaMocks;
}(experimental_1.Eip1193Bridge));
exports.default = MetaMocks;
