"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatChainId = exports.decodeFunctionCall = exports.encodeFunctionData = exports.decodeFunctionResult = exports.encodeFunctionResult = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var bytes_1 = require("@ethersproject/bytes");
var abi_1 = require("@ethersproject/abi");
var InputDataDecoder = require('ethereum-input-data-decoder');
function encodeFunctionResult(abi, funcName, result) {
    var iface = new abi_1.Interface(abi);
    return iface.encodeFunctionResult(funcName, result);
}
exports.encodeFunctionResult = encodeFunctionResult;
function decodeFunctionResult(abi, funcName, result) {
    var iface = new abi_1.Interface(abi);
    return iface.decodeFunctionResult(funcName, result);
}
exports.decodeFunctionResult = decodeFunctionResult;
function encodeFunctionData(abi, funcName, values) {
    var iface = new abi_1.Interface(abi);
    return iface.encodeFunctionData(funcName, values);
}
exports.encodeFunctionData = encodeFunctionData;
function decodeFunctionCall(abi, input) {
    var decoder = new InputDataDecoder(abi);
    return decoder.decodeData(input);
}
exports.decodeFunctionCall = decodeFunctionCall;
function formatChainId(chainId) {
    return (0, bytes_1.hexStripZeros)(bignumber_1.BigNumber.from(chainId).toHexString());
}
exports.formatChainId = formatChainId;
