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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestMulticallExtendedInterface extends ethers.utils.Interface {
  functions: {
    "functionThatReturnsTuple(uint256,uint256)": FunctionFragment;
    "multicall(bytes32,bytes[])": FunctionFragment;
    "setTime(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "functionThatReturnsTuple",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTime",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "functionThatReturnsTuple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTime", data: BytesLike): Result;

  events: {};
}

export class TestMulticallExtended extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestMulticallExtendedInterface;

  functions: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tuple: { a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber };
      0: { a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber };
    }>;

    "functionThatReturnsTuple(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tuple: { a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber };
      0: { a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber };
    }>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTime(uint256)"(
      _time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  functionThatReturnsTuple(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber }>;

  "functionThatReturnsTuple(uint256,uint256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{ a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber }>;

  "multicall(bytes32,bytes[])"(
    previousBlockhash: BytesLike,
    data: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "multicall(uint256,bytes[])"(
    deadline: BigNumberish,
    data: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "multicall(bytes[])"(
    data: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  setTime(
    _time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTime(uint256)"(
    _time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{ a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber }>;

    "functionThatReturnsTuple(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{ a: BigNumber; b: BigNumber; 0: BigNumber; 1: BigNumber }>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    setTime(_time: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setTime(uint256)"(
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "functionThatReturnsTuple(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    setTime(_time: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setTime(uint256)"(
      _time: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    functionThatReturnsTuple(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "functionThatReturnsTuple(uint256,uint256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    setTime(
      _time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTime(uint256)"(
      _time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
