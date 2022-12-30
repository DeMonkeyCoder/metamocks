import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace PairFlash {
    type FlashParamsStruct = {
        token0: string;
        token1: string;
        fee1: BigNumberish;
        amount0: BigNumberish;
        amount1: BigNumberish;
        fee2: BigNumberish;
        fee3: BigNumberish;
    };
    type FlashParamsStructOutput = [
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        token0: string;
        token1: string;
        fee1: number;
        amount0: BigNumber;
        amount1: BigNumber;
        fee2: number;
        fee3: number;
    };
}
export interface PairFlashInterface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "factory()": FunctionFragment;
        "initFlash((address,address,uint24,uint256,uint256,uint24,uint24))": FunctionFragment;
        "refundETH()": FunctionFragment;
        "swapRouter()": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "uniswapV3FlashCallback(uint256,uint256,bytes)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH9" | "factory" | "initFlash" | "refundETH" | "swapRouter" | "sweepToken" | "uniswapV3FlashCallback" | "unwrapWETH9"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "initFlash", values: [PairFlash.FlashParamsStruct]): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweepToken", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "uniswapV3FlashCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initFlash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3FlashCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9", data: BytesLike): Result;
    events: {};
}
export interface PairFlash extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PairFlashInterface;
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
        initFlash(params: PairFlash.FlashParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapRouter(overrides?: CallOverrides): Promise<[string]>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    initFlash(params: PairFlash.FlashParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    refundETH(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapRouter(overrides?: CallOverrides): Promise<string>;
    sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        initFlash(params: PairFlash.FlashParamsStruct, overrides?: CallOverrides): Promise<void>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        swapRouter(overrides?: CallOverrides): Promise<string>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        initFlash(params: PairFlash.FlashParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapRouter(overrides?: CallOverrides): Promise<BigNumber>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initFlash(params: PairFlash.FlashParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
