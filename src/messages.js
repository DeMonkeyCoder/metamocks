"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDeniedTransactionError = exports.getInsufficientFundGasEstimateError = exports.getInsufficientFundTransactionError = exports.GENERIC_ERROR_CODE_2 = exports.GENERIC_ERROR_CODE = exports.USER_DENIED_REQUEST_ERROR_CODE = exports.SAMPLE_ERROR_MESSAGE = void 0;
exports.SAMPLE_ERROR_MESSAGE = 'An error occurred';
exports.USER_DENIED_REQUEST_ERROR_CODE = 4001;
// This might happen in different situations
exports.GENERIC_ERROR_CODE = -32603;
exports.GENERIC_ERROR_CODE_2 = -320000;
const getInsufficientFundTransactionError = (address) => ({
    code: exports.GENERIC_ERROR_CODE_2,
    message: `err: insufficient funds for gas * price + value: address ${address} have 2000 want 10000000000000000000000000 (supplied gas 14995852)`,
});
exports.getInsufficientFundTransactionError = getInsufficientFundTransactionError;
const getInsufficientFundGasEstimateError = (address) => ({
    code: exports.GENERIC_ERROR_CODE,
    message: 'Internal JSON-RPC error.',
    data: {
        code: exports.GENERIC_ERROR_CODE_2,
        message: `insufficient funds for transfer: address ${address}`,
    },
});
exports.getInsufficientFundGasEstimateError = getInsufficientFundGasEstimateError;
exports.userDeniedTransactionError = {
    code: exports.USER_DENIED_REQUEST_ERROR_CODE,
    message: 'MetaMask Tx Signature: User denied transaction signature.',
    stack: '{\n  "code": 4001,\n  "message": "MetaMask Tx Signature: User denied transaction signature.",\n  "stack": "Error: MetaMask Tx Signature: User denied transaction signature.\\n...',
};
