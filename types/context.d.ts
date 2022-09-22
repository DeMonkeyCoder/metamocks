import { BaseContract } from '@ethersproject/contracts';
import { AbiHandlerInterface } from './types';
export default class MetamocksContext {
    chainId: string;
    supportedChainIds: string[];
    latestBlockNumber: number;
    fakeTransactionIndex: number;
    handlers: {
        [key: string]: AbiHandlerInterface<BaseContract>;
    };
    constructor(chainId: number, supportedChainIds?: number[]);
    getLatestBlock(): {
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
    } & {
        number: number;
    };
    getFakeTransactionHash(): string;
    setHandler(address: string, handler: AbiHandlerInterface<BaseContract>): void;
}
