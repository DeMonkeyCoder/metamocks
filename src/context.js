"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var abi_1 = require("./utils/abi");
var fake_tx_data_1 = require("./fake-tx-data");
var MetamocksContext = /** @class */ (function () {
    function MetamocksContext(chainId, supportedChainIds) {
        this.latestBlockNumber = 1;
        this.fakeTransactionIndex = 0;
        this.handlers = {};
        this.chainId = (0, abi_1.formatChainId)(String(chainId));
        this.supportedChainIds = (supportedChainIds === null || supportedChainIds === void 0 ? void 0 : supportedChainIds.map(function (cid) {
            return (0, abi_1.formatChainId)(String(cid));
        })) || [this.chainId];
    }
    MetamocksContext.prototype.getLatestBlock = function () {
        this.latestBlockNumber++;
        return Object.assign(fake_tx_data_1.latestBlock, {
            number: this.latestBlockNumber,
        });
    };
    MetamocksContext.prototype.getFakeTransactionHash = function () {
        return (0, abi_1.keccak256)([this.fakeTransactionIndex++]);
    };
    MetamocksContext.prototype.setHandler = function (address, handler) {
        this.handlers[address] = handler;
    };
    return MetamocksContext;
}());
exports.default = MetamocksContext;
