"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatChainId = exports.decodeFunctionCall = exports.encodeFunctionData = exports.decodeFunctionResult = exports.encodeFunctionResult = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const bytes_1 = require("@ethersproject/bytes");
const abi_1 = require("@ethersproject/abi");
const InputDataDecoder = require("ethereum-input-data-decoder");
function encodeFunctionResult(abi, funcName, result) {
    const iface = new abi_1.Interface(abi);
    return iface.encodeFunctionResult(funcName, result);
}
exports.encodeFunctionResult = encodeFunctionResult;
function decodeFunctionResult(abi, funcName, result) {
    const iface = new abi_1.Interface(abi);
    return iface.decodeFunctionResult(funcName, result);
}
exports.decodeFunctionResult = decodeFunctionResult;
function encodeFunctionData(abi, funcName, values) {
    const iface = new abi_1.Interface(abi);
    return iface.encodeFunctionData(funcName, values);
}
exports.encodeFunctionData = encodeFunctionData;
function decodeFunctionCall(abi, input) {
    const decoder = new InputDataDecoder(abi);
    const decoded = decoder.decodeData(input);
    let method = decoded.method;
    if (abi.filter((f) => f.name === method).length > 1) {
        method = `${method}(${decoded.types.join(",")})`;
    }
    const iface = new abi_1.Interface(abi);
    return {
        method,
        inputs: iface.decodeFunctionData(method, input),
    };
}
exports.decodeFunctionCall = decodeFunctionCall;
function formatChainId(chainId) {
    return (0, bytes_1.hexStripZeros)(bignumber_1.BigNumber.from(chainId).toHexString());
}
exports.formatChainId = formatChainId;
