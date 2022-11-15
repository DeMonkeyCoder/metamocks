"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_tx_data_1 = require("./fake-tx-data");
const abi_1 = require("./utils/abi");
const keccak256_1 = require("@ethersproject/keccak256");
class MetamocksContext {
    constructor(chainId, supportedChainIds) {
        this.latestBlockNumber = 1;
        this.fakeTransactionIndex = 0;
        this.handlers = {};
        this.chainId = (0, abi_1.formatChainId)(String(chainId));
        this.supportedChainIds = (supportedChainIds === null || supportedChainIds === void 0 ? void 0 : supportedChainIds.map((cid) => (0, abi_1.formatChainId)(String(cid)))) || [this.chainId];
    }
    getLatestBlock() {
        this.latestBlockNumber++;
        return Object.assign(fake_tx_data_1.latestBlock, {
            number: this.latestBlockNumber,
        });
    }
    getFakeTransactionHash() {
        return (0, keccak256_1.keccak256)([this.fakeTransactionIndex++]);
    }
    setHandler(address, handler) {
        this.handlers[address] = handler;
    }
}
exports.default = MetamocksContext;
