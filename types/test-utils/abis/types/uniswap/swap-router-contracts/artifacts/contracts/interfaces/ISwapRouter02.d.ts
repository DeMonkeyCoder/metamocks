import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
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
export interface ISwapRouter02Interface extends utils.Interface {
    functions: {
        "approveMax(address)": FunctionFragment;
        "approveMaxMinusOne(address)": FunctionFragment;
        "approveZeroThenMax(address)": FunctionFragment;
        "approveZeroThenMaxMinusOne(address)": FunctionFragment;
        "callPositionManager(bytes)": FunctionFragment;
        "exactInput((bytes,address,uint256,uint256))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "exactOutput((bytes,address,uint256,uint256))": FunctionFragment;
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "getApprovalType(address,uint256)": FunctionFragment;
        "increaseLiquidity((address,address,uint256,uint256,uint256))": FunctionFragment;
        "mint((address,address,uint24,int24,int24,uint256,uint256,address))": FunctionFragment;
        "multicall(bytes32,bytes[])": FunctionFragment;
        "multicall(uint256,bytes[])": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveMax" | "approveMaxMinusOne" | "approveZeroThenMax" | "approveZeroThenMaxMinusOne" | "callPositionManager" | "exactInput" | "exactInputSingle" | "exactOutput" | "exactOutputSingle" | "getApprovalType" | "increaseLiquidity" | "mint" | "multicall(bytes32,bytes[])" | "multicall(uint256,bytes[])" | "multicall(bytes[])" | "selfPermit" | "selfPermitAllowed" | "selfPermitAllowedIfNecessary" | "selfPermitIfNecessary" | "swapExactTokensForTokens" | "swapTokensForExactTokens" | "uniswapV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveMax", values: [string]): string;
    encodeFunctionData(functionFragment: "approveMaxMinusOne", values: [string]): string;
    encodeFunctionData(functionFragment: "approveZeroThenMax", values: [string]): string;
    encodeFunctionData(functionFragment: "approveZeroThenMaxMinusOne", values: [string]): string;
    encodeFunctionData(functionFragment: "callPositionManager", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "exactInput", values: [IV3SwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [IV3SwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [IV3SwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [IV3SwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "getApprovalType", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLiquidity", values: [IApproveAndCall.IncreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "mint", values: [IApproveAndCall.MintParamsStruct]): string;
    encodeFunctionData(functionFragment: "multicall(bytes32,bytes[])", values: [BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "multicall(uint256,bytes[])", values: [BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "multicall(bytes[])", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "selfPermit", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitAllowed", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitAllowedIfNecessary", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitIfNecessary", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [BigNumberish, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [BigNumberish, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "approveMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveMaxMinusOne", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveZeroThenMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveZeroThenMaxMinusOne", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPositionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApprovalType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall(bytes32,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall(uint256,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall(bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowedIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    events: {};
}
export interface ISwapRouter02 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISwapRouter02Interface;
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
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
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
    getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveMax(token: string, overrides?: CallOverrides): Promise<void>;
        approveMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>;
        approveZeroThenMax(token: string, overrides?: CallOverrides): Promise<void>;
        approveZeroThenMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>;
        callPositionManager(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<number>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<string>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: CallOverrides): Promise<string>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: CallOverrides): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
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
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
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
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
