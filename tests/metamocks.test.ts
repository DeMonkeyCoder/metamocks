import { expect } from "chai";
import MetaMocks from "../ts-src";
import { JsonRpcProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";

export const TEST_PRIVATE_KEY =
  "0xe580410d7c37d26c6ad1a837bbae46bc27f9066a466fb3a66e770523b4666d19";
export const TEST_ADDRESS_NEVER_USE = new Wallet(TEST_PRIVATE_KEY).address;

describe("Metamocks", () => {
  it("can get instance", () => {
    const provider = new JsonRpcProvider(
      "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      5
    );
    const signer = new Wallet(TEST_PRIVATE_KEY, provider);
    const metamocks = new MetaMocks(signer, 5);
    expect(metamocks).not.to.be.null;
  });
});
