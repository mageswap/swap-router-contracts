/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TokenValidatorInterface extends ethers.utils.Interface {
  functions: {
    "batchValidate(address[],address[],uint256)": FunctionFragment;
    "factoryV2()": FunctionFragment;
    "positionManager()": FunctionFragment;
    "uniswapV2Call(address,uint256,uint256,bytes)": FunctionFragment;
    "validate(address,address[],uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batchValidate",
    values: [string[], string[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV2Call",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [string, string[], BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchValidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2Call",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {};
}

export class TokenValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenValidatorInterface;

  functions: {
    batchValidate(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "batchValidate(address[],address[],uint256)"(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    factoryV2(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "factoryV2()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    positionManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "positionManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "uniswapV2Call(address,uint256,uint256,bytes)"(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    validate(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "validate(address,address[],uint256)"(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  batchValidate(
    tokens: string[],
    baseTokens: string[],
    amountToBorrow: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "batchValidate(address[],address[],uint256)"(
    tokens: string[],
    baseTokens: string[],
    amountToBorrow: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  factoryV2(overrides?: CallOverrides): Promise<string>;

  "factoryV2()"(overrides?: CallOverrides): Promise<string>;

  positionManager(overrides?: CallOverrides): Promise<string>;

  "positionManager()"(overrides?: CallOverrides): Promise<string>;

  uniswapV2Call(
    arg0: string,
    amount0: BigNumberish,
    arg2: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "uniswapV2Call(address,uint256,uint256,bytes)"(
    arg0: string,
    amount0: BigNumberish,
    arg2: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  validate(
    token: string,
    baseTokens: string[],
    amountToBorrow: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "validate(address,address[],uint256)"(
    token: string,
    baseTokens: string[],
    amountToBorrow: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    batchValidate(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number[]>;

    "batchValidate(address[],address[],uint256)"(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number[]>;

    factoryV2(overrides?: CallOverrides): Promise<string>;

    "factoryV2()"(overrides?: CallOverrides): Promise<string>;

    positionManager(overrides?: CallOverrides): Promise<string>;

    "positionManager()"(overrides?: CallOverrides): Promise<string>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "uniswapV2Call(address,uint256,uint256,bytes)"(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validate(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "validate(address,address[],uint256)"(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    batchValidate(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "batchValidate(address[],address[],uint256)"(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    factoryV2(overrides?: CallOverrides): Promise<BigNumber>;

    "factoryV2()"(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<BigNumber>;

    "positionManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uniswapV2Call(address,uint256,uint256,bytes)"(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validate(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "validate(address,address[],uint256)"(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchValidate(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "batchValidate(address[],address[],uint256)"(
      tokens: string[],
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factoryV2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "positionManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapV2Call(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uniswapV2Call(address,uint256,uint256,bytes)"(
      arg0: string,
      amount0: BigNumberish,
      arg2: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validate(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "validate(address,address[],uint256)"(
      token: string,
      baseTokens: string[],
      amountToBorrow: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
