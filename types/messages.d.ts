export declare const SAMPLE_ERROR_MESSAGE = "An error occurred";
export declare const USER_DENIED_REQUEST_ERROR_CODE = 4001;
export declare const GENERIC_ERROR_CODE = -32603;
export declare const GENERIC_ERROR_CODE_2 = -320000;
export declare const getInsufficientFundTransactionError: (address: string) => {
    code: number;
    message: string;
};
export declare const getInsufficientFundGasEstimateError: (address: string) => {
    code: number;
    message: string;
    data: {
        code: number;
        message: string;
    };
};
export declare const userDeniedTransactionError: {
    code: number;
    message: string;
    stack: string;
};
