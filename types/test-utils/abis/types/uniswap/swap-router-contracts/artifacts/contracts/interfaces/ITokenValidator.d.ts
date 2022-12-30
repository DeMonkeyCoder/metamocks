import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface ITokenValidatorInterface extends utils.Interface {
    functions: {
        "batchValidate(address[],address[],uint256)": FunctionFragment;
        "validate(address,address[],uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchValidate" | "validate"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchValidate", values: [string[], string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "validate", values: [string, string[], BigNumberish]): string;
    decodeFunctionResult(functionFragment: "batchValidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
    events: {};
}
export interface ITokenValidator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenValidatorInterface;
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
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: CallOverrides): Promise<number[]>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchValidate(tokens: string[], baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validate(token: string, baseTokens: string[], amountToBorrow: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
