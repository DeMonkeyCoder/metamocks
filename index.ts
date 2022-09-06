// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { BigNumber } from '@ethersproject/bignumber';
import {
  fakeBlockByNumberResponse,
  fakeTransactionByHashResponse,
  fakeTransactionReceipt,
  latestBlock,
} from './fakeTxData';
import { formatChainId, keccak256 } from './abiUtils';
import { Eip1193Bridge } from '@ethersproject/experimental';
import { AbiHandler } from './abiHandler';
import { ethers } from 'ethers';

export const SAMPLE_ERROR_MESSAGE = 'An error occurred';
export const USER_DENIED_REQUEST_ERROR_CODE = 4001;
// This might happen in different situations
export const GENERIC_ERROR_CODE = -32603;
export const GENERIC_ERROR_CODE_2 = -320000;

function isTheSameAddress(address1: string, address2: string) {
  return address1.toLowerCase() === address2.toLowerCase();
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class MetamocksContext {
  chainId: string;
  supportedChainIds: string[];
  latestBlockNumber = 1;
  fakeTransactionIndex = 0;
  handlers: { [key: string]: AbiHandler } = {};

  constructor(chainId: number, supportedChainIds?: number[]) {
    this.chainId = formatChainId(String(chainId));
    this.supportedChainIds = supportedChainIds?.map((cid) => formatChainId(String(cid))) || [this.chainId];
  }

  getLatestBlock() {
    this.latestBlockNumber++;
    return Object.assign(latestBlock, {
      number: this.latestBlockNumber,
    });
  }

  getFakeTransactionHash() {
    return keccak256([this.fakeTransactionIndex++]);
  }

  setHandler(address: string, handler: AbiHandler) {
    this.handlers[address] = handler;
  }
}

export enum EventHandlerKey {
  CHAIN_CHANGED = 'chainChanged',
  ACCOUNTS_CHANGED = 'accountsChanged',
  CLOSE = 'close',
  NETWORK_CHANGED = 'networkChanged',
}

export enum TransactionStatus {
  SUCCESS = 'success',
  INSUFFICIENT_FUND = 'insufficientFund',
  USER_DENIED = 'rejected',
  FAILED = 'failed',
}

const getInsufficientFundTransactionError = (address: string) => ({
  code: GENERIC_ERROR_CODE_2,
  message: `err: insufficient funds for gas * price + value: address ${address} have 2000 want 10000000000000000000000000 (supplied gas 14995852)`,
});
const getInsufficientFundGasEstimateError = (address: string) => ({
  code: GENERIC_ERROR_CODE,
  message: 'Internal JSON-RPC error.',
  data: {
    code: GENERIC_ERROR_CODE_2,
    message: `insufficient funds for transfer: address ${address}`,
  },
});
const userDeniedTransactionError = {
  code: USER_DENIED_REQUEST_ERROR_CODE,
  message: 'MetaMask Tx Signature: User denied transaction signature.',
  stack:
    '{\n  "code": 4001,\n  "message": "MetaMask Tx Signature: User denied transaction signature.",\n  "stack": "Error: MetaMask Tx Signature: User denied transaction signature.\\n...',
};

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

export class MetaMocks extends Eip1193Bridge {
  context: MetamocksContext;

  eventListeners = {
    [EventHandlerKey.CHAIN_CHANGED]: function handleChainChanged(chainId: string | number) {},
    [EventHandlerKey.ACCOUNTS_CHANGED]: function handleAccountsChanged(accounts: string[]) {},
    [EventHandlerKey.CLOSE]: function handleClose(code: number, reason: string) {},
    [EventHandlerKey.NETWORK_CHANGED]: function handleNetworkChanged(networkId: string | number) {},
  };

  transactionStatus = TransactionStatus.SUCCESS;
  transactionWaitTime = 0;

  constructor(
    signer: ethers.Signer,
    chainId: number,
    supportedChainIds?: number[],
    provider?: ethers.providers.Provider,
  ) {
    super(signer, provider);
    this.context = new MetamocksContext(chainId, supportedChainIds);
  }

  setTransactionStatus(status: TransactionStatus) {
    this.transactionStatus = status;
  }

  setTransactionWaitTime(waitTime: number) {
    this.transactionWaitTime = waitTime;
  }

  on(eventName: string | symbol, listener: (...args: any[]) => void) {
    let found = false;
    for (const k of enumKeys(EventHandlerKey)) {
      if (eventName === EventHandlerKey[k]) {
        found = true;
        this.eventListeners[eventName] = listener;
        break;
      }
    }
    if (!found) {
      throw Error(`Bridge: Unknown Event Key ${String(eventName)}`);
    }
    return this;
  }

  switchEthereumChainSpy(chainId: string) {}

  addEthereumChainSpy(chainId: string) {}

  setHandler(address: string, handler: AbiHandler) {
    this.context.setHandler(address, handler);
  }

  async sendAsync(...args: any[]) {
    return this.send(...args);
  }

  getSendArgs(args: any[]) {
    const isCallbackForm = typeof args[0] === 'object' && typeof args[1] === 'function';
    let callback;
    let method;
    let params;
    if (isCallbackForm) {
      callback = args[1];
      method = args[0].method;
      params = args[0].params;
    } else {
      method = args[0];
      params = args[1];
    }
    return {
      isCallbackForm,
      callback,
      method,
      params,
    };
  }

  async send(...args: any[]) {
    const { isCallbackForm, callback, method, params } = this.getSendArgs(args);
    let result = null;
    let resultIsSet = false;
    let runError = null;
    let errorIsSet = false;

    function setResult(r: any) {
      result = r;
      resultIsSet = true;
    }

    function setError(e: any) {
      runError = e;
      errorIsSet = true;
    }

    if (method === 'eth_requestAccounts' || method === 'eth_accounts') {
      setResult([await this.signer.getAddress()]);
    }
    if (method === 'wallet_switchEthereumChain') {
      this.switchEthereumChainSpy(params[0].chainId);
      if (this.context.supportedChainIds.includes(params[0].chainId)) {
        this.context.chainId = params[0].chainId;
        this.eventListeners[EventHandlerKey.NETWORK_CHANGED](params[0].chainId);
        this.eventListeners[EventHandlerKey.CHAIN_CHANGED](params[0].chainId);
        setResult(null);
      } else {
        const chainId = params[0].chainId;
        const error = {
          code: 4902, // To-be-standardized "unrecognized chain ID" error
          message: `Unrecognized chain ID "${chainId}". Try adding the chain using wallet_addEthereumChain first.`,
        };
        setError(error);
      }
    }
    if (method === 'wallet_addEthereumChain') {
      this.addEthereumChainSpy(params[0].chainId);
      this.context.supportedChainIds.push(params[0].chainId);
      setResult(null);
    }
    if (method === 'eth_chainId') {
      setResult(formatChainId(String(this.context.chainId)));
    }
    if (method === 'eth_getBlockByNumber') {
      if (params[0] === 'latest') {
        setResult(this.context.getLatestBlock());
      } else {
        const [blockNumber, returnFullHashes] = params;
        setResult(
          Object.assign(fakeBlockByNumberResponse, {
            number: BigNumber.from(blockNumber).toNumber(),
          }),
        );
      }
    }
    if (method === 'eth_getTransactionByHash') {
      const [transactionHash] = params;
      setResult(
        Object.assign(fakeTransactionByHashResponse, {
          hash: transactionHash,
        }),
      );
    }
    if (method === 'eth_getTransactionReceipt') {
      const [transactionHash] = params;
      const latestBlock = this.context.getLatestBlock();
      const resultLocal = Object.assign(fakeTransactionReceipt, {
        transactionHash,
        blockHash: latestBlock.hash,
        blockNumber: latestBlock.number,
        logs: fakeTransactionReceipt.logs.map((log) => Object.assign(log, transactionHash)),
      });
      setResult(resultLocal);
    }
    if (method === 'eth_blockNumber') {
      setResult(this.context.getLatestBlock().number);
    }
    if (method === 'eth_call') {
      for (const contractAddress in this.context.handlers) {
        if (isTheSameAddress(contractAddress, params[0].to)) {
          await this.context.handlers[contractAddress].handleCall(this.context, params[0].data, setResult);
        }
      }
    }
    if (method === 'eth_estimateGas') {
      if (this.transactionStatus === TransactionStatus.INSUFFICIENT_FUND) {
        setError(getInsufficientFundGasEstimateError(await this.signer.getAddress()));
      } else {
        setResult('0xba7f');
      }
    }
    if (method === 'eth_sendTransaction') {
      for (const contractAddress in this.context.handlers) {
        if (isTheSameAddress(contractAddress, params[0].to)) {
          await this.context.handlers[contractAddress].handleTransaction(this.context, params[0].data, setResult);
        }
      }
      if (this.transactionStatus === TransactionStatus.SUCCESS) {
        setResult(this.context.getFakeTransactionHash());
      } else if (this.transactionStatus === TransactionStatus.USER_DENIED) {
        setError(userDeniedTransactionError);
      } else if (this.transactionStatus === TransactionStatus.INSUFFICIENT_FUND) {
        setError(getInsufficientFundTransactionError(await this.signer.getAddress()));
      } else {
        setError({ error: { message: SAMPLE_ERROR_MESSAGE } });
      }
      if (this.transactionWaitTime) {
        await sleep(this.transactionWaitTime);
      }
    }

    if (errorIsSet) {
      if (isCallbackForm) {
        callback(runError, null);
      } else {
        throw runError;
      }
    } else if (resultIsSet) {
      if (isCallbackForm) {
        callback(null, { result });
      } else {
        return result;
      }
    } else {
      try {
        const result = await super.send(method, params);
        if (isCallbackForm) {
          callback(null, { result });
        } else {
          return result;
        }
      } catch (error) {
        if (isCallbackForm) {
          callback(error, null);
        } else {
          throw error;
        }
      }
    }
  }
}
