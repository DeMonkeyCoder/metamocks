import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IQuoterV2 {
    type QuoteExactInputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type QuoteExactInputSingleParamsStructOutput = [
        string,
        string,
        BigNumber,
        number,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
        fee: number;
        sqrtPriceLimitX96: BigNumber;
    };
    type QuoteExactOutputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type QuoteExactOutputSingleParamsStructOutput = [
        string,
        string,
        BigNumber,
        number,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        amount: BigNumber;
        fee: number;
        sqrtPriceLimitX96: BigNumber;
    };
}
export interface IQuoterV2Interface extends utils.Interface {
    functions: {
        "quoteExactInput(bytes,uint256)": FunctionFragment;
        "quoteExactInputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
        "quoteExactOutput(bytes,uint256)": FunctionFragment;
        "quoteExactOutputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteExactInput" | "quoteExactInputSingle" | "quoteExactOutput" | "quoteExactOutputSingle"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteExactInput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactInputSingle", values: [IQuoterV2.QuoteExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "quoteExactOutput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactOutputSingle", values: [IQuoterV2.QuoteExactOutputSingleParamsStruct]): string;
    decodeFunctionResult(functionFragment: "quoteExactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactOutputSingle", data: BytesLike): Result;
    events: {};
}
export interface IQuoterV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IQuoterV2Interface;
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
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactInputSingle(params: IQuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactOutputSingle(params: IQuoterV2.QuoteExactOutputSingleParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactInputSingle(params: IQuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactOutputSingle(params: IQuoterV2.QuoteExactOutputSingleParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber[],
            number[],
            BigNumber
        ] & {
            amountOut: BigNumber;
            sqrtPriceX96AfterList: BigNumber[];
            initializedTicksCrossedList: number[];
            gasEstimate: BigNumber;
        }>;
        quoteExactInputSingle(params: IQuoterV2.QuoteExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            amountOut: BigNumber;
            sqrtPriceX96After: BigNumber;
            initializedTicksCrossed: number;
            gasEstimate: BigNumber;
        }>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber[],
            number[],
            BigNumber
        ] & {
            amountIn: BigNumber;
            sqrtPriceX96AfterList: BigNumber[];
            initializedTicksCrossedList: number[];
            gasEstimate: BigNumber;
        }>;
        quoteExactOutputSingle(params: IQuoterV2.QuoteExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            amountIn: BigNumber;
            sqrtPriceX96After: BigNumber;
            initializedTicksCrossed: number;
            gasEstimate: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactInputSingle(params: IQuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactOutputSingle(params: IQuoterV2.QuoteExactOutputSingleParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactInputSingle(params: IQuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactOutputSingle(params: IQuoterV2.QuoteExactOutputSingleParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
