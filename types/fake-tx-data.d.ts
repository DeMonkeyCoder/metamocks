export declare const FAKE_BLOCK_HASH = "0xeed54f1dd0adad878c624694038ac3c70631ec800b150b9caf9eedd4aea3df95";
export declare const fakeBlockByNumberResponse: {
    hash: string;
    parentHash: string;
    number: number;
    timestamp: number;
    nonce: string;
    difficulty: number;
    gasLimit: {
        type: string;
        hex: string;
    };
    gasUsed: {
        type: string;
        hex: string;
    };
    miner: string;
    extraData: string;
    transactions: string[];
    baseFeePerGas: {
        type: string;
        hex: string;
    };
    _difficulty: {
        type: string;
        hex: string;
    };
};
export declare const fakeTransactionByHashResponse: {
    hash: string;
    type: number;
    accessList: null;
    blockHash: string;
    blockNumber: number;
    transactionIndex: number;
    confirmations: number;
    from: string;
    gasPrice: {
        type: string;
        hex: string;
    };
    gasLimit: {
        type: string;
        hex: string;
    };
    to: string;
    value: {
        type: string;
        hex: string;
    };
    nonce: number;
    data: string;
    r: string;
    s: string;
    v: number;
    creates: null;
    chainId: number;
};
export declare const fakeTransactionReceipt: {
    to: string;
    from: string;
    contractAddress: null;
    transactionIndex: number;
    gasUsed: {
        type: string;
        hex: string;
    };
    logsBloom: string;
    blockHash: string;
    transactionHash: string;
    logs: {
        transactionIndex: number;
        blockNumber: number;
        transactionHash: string;
        address: string;
        topics: string[];
        data: string;
        logIndex: number;
        blockHash: string;
    }[];
    blockNumber: number;
    confirmations: number;
    cumulativeGasUsed: {
        type: string;
        hex: string;
    };
    effectiveGasPrice: {
        type: string;
        hex: string;
    };
    status: number;
    type: number;
    byzantium: boolean;
};
export declare const latestBlock: {
    hash: string;
    parentHash: string;
    number: number;
    timestamp: number;
    nonce: string;
    difficulty: number;
    gasLimit: {
        type: string;
        hex: string;
    };
    gasUsed: {
        type: string;
        hex: string;
    };
    miner: string;
    extraData: string;
    transactions: string[];
    _difficulty: {
        type: string;
        hex: string;
    };
};
