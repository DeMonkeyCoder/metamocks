import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IApproveAndCall {
    type IncreaseLiquidityParamsStruct = {
        token0: string;
        token1: string;
        tokenId: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
    };
    type IncreaseLiquidityParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        token0: string;
        token1: string;
        tokenId: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
    };
    type MintParamsStruct = {
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
    };
    type MintParamsStructOutput = [
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        string
    ] & {
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        recipient: string;
    };
}
export interface IApproveAndCallInterface extends utils.Interface {
    functions: {
        "approveMax(address)": FunctionFragment;
        "approveMaxMinusOne(address)": FunctionFragment;
        "approveZeroThenMax(address)": FunctionFragment;
        "approveZeroThenMaxMinusOne(address)": FunctionFragment;
        "callPositionManager(bytes)": FunctionFragment;
        "getApprovalType(address,uint256)": FunctionFragment;
        "increaseLiquidity((address,address,uint256,uint256,uint256))": FunctionFragment;
        "mint((address,address,uint24,int24,int24,uint256,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveMax" | "approveMaxMinusOne" | "approveZeroThenMax" | "approveZeroThenMaxMinusOne" | "callPositionManager" | "getApprovalType" | "increaseLiquidity" | "mint"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveMax", values: [string]): string;
    encodeFunctionData(functionFragment: "approveMaxMinusOne", values: [string]): string;
    encodeFunctionData(functionFragment: "approveZeroThenMax", values: [string]): string;
    encodeFunctionData(functionFragment: "approveZeroThenMaxMinusOne", values: [string]): string;
    encodeFunctionData(functionFragment: "callPositionManager", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getApprovalType", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLiquidity", values: [IApproveAndCall.IncreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "mint", values: [IApproveAndCall.MintParamsStruct]): string;
    decodeFunctionResult(functionFragment: "approveMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveMaxMinusOne", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveZeroThenMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveZeroThenMaxMinusOne", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPositionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApprovalType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    events: {};
}
export interface IApproveAndCall extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IApproveAndCallInterface;
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
        approveMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveZeroThenMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approveMax(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveZeroThenMax(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveMax(token: string, overrides?: CallOverrides): Promise<void>;
        approveMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>;
        approveZeroThenMax(token: string, overrides?: CallOverrides): Promise<void>;
        approveZeroThenMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>;
        callPositionManager(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<number>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<string>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        approveMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveZeroThenMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveZeroThenMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
