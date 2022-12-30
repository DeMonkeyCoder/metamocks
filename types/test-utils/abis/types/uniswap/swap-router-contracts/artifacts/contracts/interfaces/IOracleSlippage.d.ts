import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IOracleSlippageInterface extends utils.Interface {
    functions: {
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)": FunctionFragment;
        "checkOracleSlippage(bytes,uint24,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)" | "checkOracleSlippage(bytes,uint24,uint32)"): FunctionFragment;
    encodeFunctionData(functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)", values: [BytesLike[], BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkOracleSlippage(bytes,uint24,uint32)", values: [BytesLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkOracleSlippage(bytes,uint24,uint32)", data: BytesLike): Result;
    events: {};
}
export interface IOracleSlippage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOracleSlippageInterface;
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
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
