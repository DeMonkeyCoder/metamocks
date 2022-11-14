import { encodeFunctionData } from "../ts-src/utils/abi";
import {
  TEST_ADDRESS_NEVER_USE,
  TEST_CONTRACT_ADDRESS,
} from "../ts-src/test-utils/data";
import { expect } from "chai";
import ERC20_ABI from "../ts-src/test-utils/abis/erc20.json";

describe("Abi Utils", () => {
  it("can encode call data", () => {
    const allowance = encodeFunctionData(ERC20_ABI, "allowance", [
      TEST_ADDRESS_NEVER_USE,
      TEST_CONTRACT_ADDRESS,
    ]);
    expect(allowance).to.eq(
      "0xdd62ed3e00000000000000000000000068d25464371f3a97691c52e40d4c1306af0b76290000000000000000000000001184a2e723e1ec42fae4aea53f4805d502ccef92"
    );
  });
});
