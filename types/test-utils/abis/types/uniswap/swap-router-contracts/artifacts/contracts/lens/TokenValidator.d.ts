import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface TokenValidatorInterface extends utils.Interface {
    functions: {
        "batchValidate(address[],address[],uint256)": FunctionFragment;
        "factoryV2()": FunctionFragment;
        "positionManager()": FunctionFragment;
        "uniswapV2Call(address,uint256,uint256,bytes)": FunctionFragment;
        "validate(address,address[],uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchValidate" | "factoryV2" | "positionManager" | "uniswapV2Call" | "validate"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchValidate", values: [string[], string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniswapV2Call", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "validate", values: [string, string[], BigNumberish]): string;
    decodeFunctionResult(functionFragment: "batchValidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV2Call", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
    events: {};
}
export interface TokenValidator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenValidatorInterface;
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
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factoryV2(overrides?: CallOverrides): Promise<[string]>;
        positionManager(overrides?: CallOverrides): Promise<[string]>;
        uniswapV2Call(arg0: string, amount0: BigNumberish, arg2: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factoryV2(overrides?: CallOverrides): Promise<string>;
    positionManager(overrides?: CallOverrides): Promise<string>;
    uniswapV2Call(arg0: string, amount0: BigNumberish, arg2: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: CallOverrides): Promise<number[]>;
        factoryV2(overrides?: CallOverrides): Promise<string>;
        positionManager(overrides?: CallOverrides): Promise<string>;
        uniswapV2Call(arg0: string, amount0: BigNumberish, arg2: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factoryV2(overrides?: CallOverrides): Promise<BigNumber>;
        positionManager(overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV2Call(arg0: string, amount0: BigNumberish, arg2: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniswapV2Call(arg0: string, amount0: BigNumberish, arg2: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
