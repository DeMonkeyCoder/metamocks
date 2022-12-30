"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUniswapV3FlashCallback__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fee0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee1",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "uniswapV3FlashCallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IUniswapV3FlashCallback__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IUniswapV3FlashCallback__factory = IUniswapV3FlashCallback__factory;
IUniswapV3FlashCallback__factory.abi = _abi;