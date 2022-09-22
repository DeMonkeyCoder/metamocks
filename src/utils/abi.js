"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatChainId = exports.decodeEthCall = exports.encodeEthResult = exports.keccak256 = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var bytes_1 = require("@ethersproject/bytes");
var ethers_1 = require("ethers");
var InputDataDecoder = require('ethereum-input-data-decoder');
function keccak256(data) {
    return ethers_1.ethers.utils.keccak256(data);
}
exports.keccak256 = keccak256;
function encodeEthResult(abi, funcName, result) {
    var iface = new ethers_1.ethers.utils.Interface(abi);
    return iface.encodeFunctionResult(funcName, result);
}
exports.encodeEthResult = encodeEthResult;
function decodeEthCall(abi, input) {
    var decoder = new InputDataDecoder(abi);
    return decoder.decodeData(input);
}
exports.decodeEthCall = decodeEthCall;
function formatChainId(chainId) {
    return (0, bytes_1.hexStripZeros)(bignumber_1.BigNumber.from(chainId).toHexString());
}
exports.formatChainId = formatChainId;
