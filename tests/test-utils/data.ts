import {Wallet} from "@ethersproject/wallet";

export const TEST_PRIVATE_KEY =
    "0xe580410d7c37d26c6ad1a837bbae46bc27f9066a466fb3a66e770523b4666d19";
export const TEST_ADDRESS_NEVER_USE = new Wallet(TEST_PRIVATE_KEY).address;
export const TEST_ERC20_CONTRACT_ADDRESS = "0x15F2d9E865f8b2FFF525fE07c9cAdC7855F93eF7"
export const TEST_CONTRACT_ADDRESS2 = "0x1184a2e723E1EC42fAe4AeA53f4805D502CCeF92"
export const CHAIN_ID = 30;