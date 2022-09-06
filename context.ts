import AbiHandler from "./abihandler";
import {formatChainId, keccak256} from "./utils/abi";
import {latestBlock} from "./fake-tx-data";

export default class MetamocksContext {
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