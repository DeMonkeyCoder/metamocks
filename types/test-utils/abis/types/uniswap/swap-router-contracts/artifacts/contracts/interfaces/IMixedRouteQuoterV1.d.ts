import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IMixedRouteQuoterV1 {
    type QuoteExactInputSingleV2ParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
    };
    type QuoteExactInputSingleV2ParamsStructOutput = [
        string,
        string,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
    };
    type QuoteExactInputSingleV3ParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumberish;
        fee: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type QuoteExactInputSingleV3ParamsStructOutput = [
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
}
export interface IMixedRouteQuoterV1Interface extends utils.Interface {
    functions: {
        "quoteExactInput(bytes,uint256)": FunctionFragment;
        "quoteExactInputSingleV2((address,address,uint256))": FunctionFragment;
        "quoteExactInputSingleV3((address,address,uint256,uint24,uint160))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteExactInput" | "quoteExactInputSingleV2" | "quoteExactInputSingleV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteExactInput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactInputSingleV2", values: [IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct]): string;
    encodeFunctionData(functionFragment: "quoteExactInputSingleV3", values: [IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct]): string;
    decodeFunctionResult(functionFragment: "quoteExactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactInputSingleV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactInputSingleV3", data: BytesLike): Result;
    events: {};
}
export interface IMixedRouteQuoterV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMixedRouteQuoterV1Interface;
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
        quoteExactInputSingleV2(params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactInputSingleV3(params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactInputSingleV2(params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactInputSingleV3(params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct, overrides?: Overrides & {
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
            v3SqrtPriceX96AfterList: BigNumber[];
            v3InitializedTicksCrossedList: number[];
            v3SwapGasEstimate: BigNumber;
        }>;
        quoteExactInputSingleV2(params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactInputSingleV3(params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct, overrides?: CallOverrides): Promise<[
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
    };
    filters: {};
    estimateGas: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactInputSingleV2(params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactInputSingleV3(params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactInputSingleV2(params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactInputSingleV3(params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
