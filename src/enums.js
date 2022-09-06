"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = exports.EventHandlerKey = void 0;
var EventHandlerKey;
(function (EventHandlerKey) {
    EventHandlerKey["CHAIN_CHANGED"] = "chainChanged";
    EventHandlerKey["ACCOUNTS_CHANGED"] = "accountsChanged";
    EventHandlerKey["CLOSE"] = "close";
    EventHandlerKey["NETWORK_CHANGED"] = "networkChanged";
})(EventHandlerKey = exports.EventHandlerKey || (exports.EventHandlerKey = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["INSUFFICIENT_FUND"] = "insufficientFund";
    TransactionStatus["USER_DENIED"] = "rejected";
    TransactionStatus["FAILED"] = "failed";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
