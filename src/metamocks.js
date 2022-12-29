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
const experimental_1 = require("@ethersproject/experimental");
const context_1 = __importDefault(require("./context"));
const enums_1 = require("./enums");
const fake_tx_data_1 = require("./fake-tx-data");
const messages_1 = require("./messages");
const utils_1 = require("./utils");
const abi_1 = require("./utils/abi");
const providers_1 = require("@ethersproject/providers");
const wallet_1 = require("@ethersproject/wallet");
class MetaMocks extends experimental_1.Eip1193Bridge {
    constructor(signerWalletPrivateKey, chainId, rpcUrl = "", supportedChainIds) {
        const provider = new providers_1.JsonRpcProvider(rpcUrl, chainId);
        const signer = new wallet_1.Wallet(signerWalletPrivateKey, provider);
        super(signer, provider);
        this.eventListeners = {
            [enums_1.EventHandlerKey.CHAIN_CHANGED]: function handleChainChanged(chainId) {
            },
            [enums_1.EventHandlerKey.ACCOUNTS_CHANGED]: function handleAccountsChanged(accounts) {
            },
            [enums_1.EventHandlerKey.CLOSE]: function handleClose(code, reason) {
            },
            [enums_1.EventHandlerKey.NETWORK_CHANGED]: function handleNetworkChanged(networkId) {
            },
        };
        this.transactionStatus = enums_1.TransactionStatus.SUCCESS;
        this.transactionWaitTime = 0;
        this.context = new context_1.default(chainId, supportedChainIds);
    }
    setTransactionStatus(status) {
        this.transactionStatus = status;
    }
    setTransactionWaitTime(waitTime) {
        this.transactionWaitTime = waitTime;
    }
    on(eventName, listener) {
        let found = false;
        for (const k of (0, utils_1.enumKeys)(enums_1.EventHandlerKey)) {
            if (eventName === enums_1.EventHandlerKey[k]) {
                found = true;
                this.eventListeners[eventName] = listener;
                break;
            }
        }
        if (!found) {
            throw Error(`Bridge: Unknown Event Key ${String(eventName)}`);
        }
        return this;
    }
    switchEthereumChainSpy(chainId) {
    }
    addEthereumChainSpy(chainId) {
    }
    registerAbiHandler(address, handlerClass) {
        const handler = new handlerClass(this.context);
        this.context.setHandler(address, handler);
        return handler;
    }
    sendAsync(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send(...args);
        });
    }
    getSendArgs(args) {
        const isCallbackForm = typeof args[0] === "object" && typeof args[1] === "function";
        let callback;
        let method;
        let params;
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
            isCallbackForm,
            callback,
            method,
            params,
        };
    }
    send(...args) {
        const _super = Object.create(null, {
            send: { get: () => super.send }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const { isCallbackForm, callback, method, params } = this.getSendArgs(args);
            let result = null;
            let resultIsSet = false;
            let runError = null;
            let errorIsSet = false;
            function setResult(r) {
                result = r;
                resultIsSet = true;
            }
            function setError(e) {
                runError = e;
                errorIsSet = true;
            }
            if (method === "eth_requestAccounts" || method === "eth_accounts") {
                setResult([yield this.signer.getAddress()]);
            }
            if (method === "wallet_switchEthereumChain") {
                this.switchEthereumChainSpy(params[0].chainId);
                if (this.context.supportedChainIds.includes(params[0].chainId)) {
                    this.context.chainId = params[0].chainId;
                    this.eventListeners[enums_1.EventHandlerKey.NETWORK_CHANGED](params[0].chainId);
                    this.eventListeners[enums_1.EventHandlerKey.CHAIN_CHANGED](params[0].chainId);
                    setResult(null);
                }
                else {
                    const chainId = params[0].chainId;
                    const error = {
                        code: 4902,
                        message: `Unrecognized chain ID "${chainId}". Try adding the chain using wallet_addEthereumChain first.`,
                    };
                    setError(error);
                }
            }
            if (method === "wallet_addEthereumChain") {
                this.addEthereumChainSpy(params[0].chainId);
                this.context.supportedChainIds.push(params[0].chainId);
                setResult(null);
            }
            if (method === "eth_chainId") {
                setResult((0, abi_1.formatChainId)(String(this.context.chainId)));
            }
            if (method === "eth_getBlockByNumber") {
                if (params[0] === "latest") {
                    setResult(this.context.getLatestBlock());
                }
                else {
                    const [blockNumber, returnFullHashes] = params;
                    setResult(Object.assign(fake_tx_data_1.fakeBlockByNumberResponse, {
                        number: bignumber_1.BigNumber.from(blockNumber).toNumber(),
                    }));
                }
            }
            if (method === "eth_getTransactionByHash") {
                const [transactionHash] = params;
                setResult(Object.assign(fake_tx_data_1.fakeTransactionByHashResponse, {
                    hash: transactionHash,
                }));
            }
            if (method === "eth_getTransactionReceipt") {
                const [transactionHash] = params;
                const latestBlock = this.context.getLatestBlock();
                const resultLocal = Object.assign(fake_tx_data_1.fakeTransactionReceipt, {
                    transactionHash,
                    blockHash: latestBlock.hash,
                    blockNumber: latestBlock.number,
                    logs: fake_tx_data_1.fakeTransactionReceipt.logs.map((log) => Object.assign(log, transactionHash)),
                });
                setResult(resultLocal);
            }
            if (method === "eth_blockNumber") {
                setResult(this.context.getLatestBlock().number);
            }
            if (method === "eth_call") {
                for (const contractAddress in this.context.handlers) {
                    if ((0, utils_1.isTheSameAddress)(contractAddress, params[0].to)) {
                        yield this.context.handlers[contractAddress].handleCall(params[0].data, setResult);
                    }
                }
            }
            if (method === "eth_estimateGas") {
                if (this.transactionStatus === enums_1.TransactionStatus.INSUFFICIENT_FUND) {
                    setError((0, messages_1.getInsufficientFundGasEstimateError)(yield this.signer.getAddress()));
                }
                else {
                    setResult("0xba7f");
                }
            }
            if (method === "eth_sendTransaction") {
                for (const contractAddress in this.context.handlers) {
                    if ((0, utils_1.isTheSameAddress)(contractAddress, params[0].to)) {
                        yield this.context.handlers[contractAddress].handleTransaction(params[0].data, setResult);
                    }
                }
                if (this.transactionStatus === enums_1.TransactionStatus.SUCCESS) {
                    setResult(this.context.getFakeTransactionHash());
                }
                else if (this.transactionStatus === enums_1.TransactionStatus.USER_DENIED) {
                    setError(messages_1.userDeniedTransactionError);
                }
                else if (this.transactionStatus === enums_1.TransactionStatus.INSUFFICIENT_FUND) {
                    setError((0, messages_1.getInsufficientFundTransactionError)(yield this.signer.getAddress()));
                }
                else {
                    setError({ error: { message: messages_1.SAMPLE_ERROR_MESSAGE } });
                }
                if (this.transactionWaitTime) {
                    yield (0, utils_1.sleep)(this.transactionWaitTime);
                }
            }
            if (errorIsSet) {
                if (isCallbackForm) {
                    callback(runError, null);
                }
                else {
                    throw runError;
                }
            }
            else if (resultIsSet) {
                if (isCallbackForm) {
                    callback(null, { result });
                }
                else {
                    return result;
                }
            }
            else {
                try {
                    const result = yield _super.send.call(this, method, params);
                    if (isCallbackForm) {
                        callback(null, { result });
                    }
                    else {
                        return result;
                    }
                }
                catch (error) {
                    if (isCallbackForm) {
                        callback(error, null);
                    }
                    else {
                        throw error;
                    }
                }
            }
        });
    }
}
exports.default = MetaMocks;
