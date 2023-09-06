import {BigNumber} from '@ethersproject/bignumber';
import {BaseContract} from '@ethersproject/contracts';
import {Eip1193Bridge} from '@ethersproject/experimental';
import {JsonRpcProvider} from '@ethersproject/providers';
import {Wallet} from '@ethersproject/wallet';

import MetamocksContext from './context';
import {EventHandlerKey, TransactionStatus} from './enums';
import {fakeBlockByNumberResponse, fakeTransactionByHashResponse, fakeTransactionReceipt} from './fake-tx-data';
import {
  getInsufficientFundGasEstimateError,
  getInsufficientFundTransactionError,
  SAMPLE_ERROR_MESSAGE,
  userDeniedTransactionError,
} from './messages';
import {MockContractInterface} from './types';
import {enumKeys, isTheSameAddress, sleep} from './utils';
import {formatChainId} from './utils/abi';

export default class MetaMocks extends Eip1193Bridge {
  context: MetamocksContext;

  eventListeners: {
    [key in EventHandlerKey]: Function;
  } = {
    [EventHandlerKey.CHAIN_CHANGED]: function handleChainChanged(chainId: string | number) {
    },
    [EventHandlerKey.ACCOUNTS_CHANGED]: function handleAccountsChanged(accounts: string[]) {
    },
    [EventHandlerKey.CLOSE]: function handleClose(code: number, reason: string) {
    },
    [EventHandlerKey.NETWORK_CHANGED]: function handleNetworkChanged(networkId: string | number) {
    },
    [EventHandlerKey.DISCONNECT]: function f(...args: any[]) {
    },
  };

  transactionStatus = TransactionStatus.SUCCESS;
  transactionWaitTime = 0;
  transactionDataByHash: { [hash: string]: string } = {};

  constructor(signerWalletPrivateKey: string, chainId: number, rpcUrl = '', supportedChainIds?: number[]) {
    const provider = new JsonRpcProvider(rpcUrl, chainId);
    const signer = new Wallet(signerWalletPrivateKey, provider);
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
      console.error(`Bridge: Unknown Event Key ${String(eventName)}`);
    }
    return this;
  }

  switchEthereumChainSpy(chainId: string) {
  }

  addEthereumChainSpy(chainId: string) {
  }

  registerMockContract<T extends BaseContract>(
    address: string,
    handlerClass: new (...args: any) => MockContractInterface<T>,
  ) {
    const handler = new handlerClass(this.context);
    this.context.setHandler(address, handler);
    return handler;
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
      callback,
      method,
      params,
    };
  }

  async send(...args: any[]) {
    const {callback, method, params} = this.getSendArgs(args);
    const {result, resultIsSet, runError, errorIsSet} = await this.handleEthMethod({method, params});

    if (errorIsSet) {
      if (callback) {
        callback(runError, null);
      } else {
        throw runError;
      }
    } else if (resultIsSet) {
      if (callback) {
        callback(null, {result});
      } else {
        return result;
      }
    } else {
      try {
        const result = await super.send(method, params);
        if (callback) {
          callback(null, {result});
        } else {
          return result;
        }
      } catch (error) {
        if (callback) {
          callback(error, null);
        } else {
          throw error;
        }
      }
    }
  }

  async handleEthMethod({method, params}: { method: string; params: any[] }) {
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
    if (method === 'eth_getBalance') {
      setResult('0x0');
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
      const data = this.transactionDataByHash[transactionHash] || '0xfdb5a03e';
      setResult(
        Object.assign(fakeTransactionByHashResponse, {
          hash: transactionHash,
          data,
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
          await this.context.handlers[contractAddress].handleCall(params[0].data, setResult);
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
          await this.context.handlers[contractAddress].handleTransaction(params[0].data, setResult);
        }
      }
      if (this.transactionStatus === TransactionStatus.SUCCESS) {
        const transactionHash = this.context.getFakeTransactionHash();
        setResult(transactionHash);
        this.transactionDataByHash[transactionHash] = params[0].data;
      } else if (this.transactionStatus === TransactionStatus.USER_DENIED) {
        setError(userDeniedTransactionError);
      } else if (this.transactionStatus === TransactionStatus.INSUFFICIENT_FUND) {
        setError(getInsufficientFundTransactionError(await this.signer.getAddress()));
      } else {
        setError({error: {message: SAMPLE_ERROR_MESSAGE}});
      }
      if (this.transactionWaitTime) {
        await sleep(this.transactionWaitTime);
      }
    }
    return {
      result,
      resultIsSet,
      runError,
      errorIsSet,
    };
  }
}
