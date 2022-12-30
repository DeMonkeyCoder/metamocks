import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface V2SwapRouterInterface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "factory()": FunctionFragment;
        "factoryV2()": FunctionFragment;
        "positionManager()": FunctionFragment;
        "pull(address,uint256)": FunctionFragment;
        "refundETH()": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address)": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "sweepToken(address,uint256)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,uint256,address)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,address,uint256,address)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
        "unwrapWETH9(uint256)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,address,uint256,address)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,uint256,address)": FunctionFragment;
        "wrapETH(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH9" | "factory" | "factoryV2" | "positionManager" | "pull" | "refundETH" | "swapExactTokensForTokens" | "swapTokensForExactTokens" | "sweepToken(address,uint256,address)" | "sweepToken(address,uint256)" | "sweepTokenWithFee(address,uint256,uint256,address)" | "sweepTokenWithFee(address,uint256,address,uint256,address)" | "unwrapWETH9(uint256,address)" | "unwrapWETH9(uint256)" | "unwrapWETH9WithFee(uint256,address,uint256,address)" | "unwrapWETH9WithFee(uint256,uint256,address)" | "wrapETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "pull", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [BigNumberish, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [BigNumberish, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "sweepToken(address,uint256,address)", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepToken(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee(address,uint256,uint256,address)", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee(address,uint256,address,uint256,address)", values: [string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9(uint256,address)", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee(uint256,address,uint256,address)", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee(uint256,uint256,address)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "wrapETH", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken(address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee(address,uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee(address,uint256,address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9(uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee(uint256,address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapETH", data: BytesLike): Result;
    events: {};
}
export interface V2SwapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: V2SwapRouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        factoryV2(overrides?: CallOverrides): Promise<[string]>;
        positionManager(overrides?: CallOverrides): Promise<[string]>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    factoryV2(overrides?: CallOverrides): Promise<string>;
    positionManager(overrides?: CallOverrides): Promise<string>;
    pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    refundETH(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        factoryV2(overrides?: CallOverrides): Promise<string>;
        positionManager(overrides?: CallOverrides): Promise<string>;
        pull(token: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: CallOverrides): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: CallOverrides): Promise<BigNumber>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        wrapETH(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        factoryV2(overrides?: CallOverrides): Promise<BigNumber>;
        positionManager(overrides?: CallOverrides): Promise<BigNumber>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
