"use strict";
// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapInterfaceMulticallMockContract = exports.encodeFunctionResult = exports.decodeFunctionCall = exports.isTheSameAddress = exports.default = exports.MetamocksContext = exports.MockContract = void 0;
var BaseMockContract_1 = require("./BaseMockContract");
Object.defineProperty(exports, "MockContract", { enumerable: true, get: function () { return __importDefault(BaseMockContract_1).default; } });
var context_1 = require("./context");
Object.defineProperty(exports, "MetamocksContext", { enumerable: true, get: function () { return __importDefault(context_1).default; } });
var metamocks_1 = require("./metamocks");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(metamocks_1).default; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "isTheSameAddress", { enumerable: true, get: function () { return utils_1.isTheSameAddress; } });
var abi_1 = require("./utils/abi");
Object.defineProperty(exports, "decodeFunctionCall", { enumerable: true, get: function () { return abi_1.decodeFunctionCall; } });
Object.defineProperty(exports, "encodeFunctionResult", { enumerable: true, get: function () { return abi_1.encodeFunctionResult; } });
var UniswapInterfaceMulticall_1 = require("./mock-contracts/UniswapInterfaceMulticall");
Object.defineProperty(exports, "UniswapInterfaceMulticallMockContract", { enumerable: true, get: function () { return __importDefault(UniswapInterfaceMulticall_1).default; } });
