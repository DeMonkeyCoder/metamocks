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

export {default as AbiHandler} from './abihandler';
export {default as MetaMocks} from './metamocks';
export {default as MetamocksContext} from './context';