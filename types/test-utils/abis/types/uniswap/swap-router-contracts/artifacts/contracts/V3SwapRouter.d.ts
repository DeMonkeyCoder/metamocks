import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IV3SwapRouter {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
    };
    type ExactInputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
    };
    type ExactInputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
    type ExactOutputParamsStruct = {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
    };
    type ExactOutputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
    };
    type ExactOutputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactOutputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
}
export interface V3SwapRouterInterface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)": FunctionFragment;
        "checkOracleSlippage(bytes,uint24,uint32)": FunctionFragment;
        "exactInput((bytes,address,uint256,uint256))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "exactOutput((bytes,address,uint256,uint256))": FunctionFragment;
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "factory()": FunctionFragment;
        "pull(address,uint256)": FunctionFragment;
        "refundETH()": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "sweepToken(address,uint256)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,uint256,address)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,address,uint256,address)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
        "unwrapWETH9(uint256)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,address,uint256,address)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,uint256,address)": FunctionFragment;
        "wrapETH(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH9" | "checkOracleSlippage(bytes[],uint128[],uint24,uint32)" | "checkOracleSlippage(bytes,uint24,uint32)" | "exactInput" | "exactInputSingle" | "exactOutput" | "exactOutputSingle" | "factory" | "pull" | "refundETH" | "sweepToken(address,uint256,address)" | "sweepToken(address,uint256)" | "sweepTokenWithFee(address,uint256,uint256,address)" | "sweepTokenWithFee(address,uint256,address,uint256,address)" | "uniswapV3SwapCallback" | "unwrapWETH9(uint256,address)" | "unwrapWETH9(uint256)" | "unwrapWETH9WithFee(uint256,address,uint256,address)" | "unwrapWETH9WithFee(uint256,uint256,address)" | "wrapETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)", values: [BytesLike[], BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkOracleSlippage(bytes,uint24,uint32)", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exactInput", values: [IV3SwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [IV3SwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [IV3SwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [IV3SwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "pull", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweepToken(address,uint256,address)", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepToken(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee(address,uint256,uint256,address)", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee(address,uint256,address,uint256,address)", values: [string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9(uint256,address)", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee(uint256,address,uint256,address)", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee(uint256,uint256,address)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "wrapETH", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkOracleSlippage(bytes,uint24,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken(address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee(address,uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee(address,uint256,address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9(uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee(uint256,address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapETH", data: BytesLike): Result;
    events: {};
}
export interface V3SwapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: V3SwapRouterInterface;
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
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        refundETH(overrides?: PayableOverrides & {
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
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
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
    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    refundETH(overrides?: PayableOverrides & {
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
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
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
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        pull(token: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        wrapETH(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
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
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
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
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
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
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
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
