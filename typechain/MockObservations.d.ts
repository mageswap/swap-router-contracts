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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockObservationsInterface extends ethers.utils.Interface {
  functions: {
    "observations(uint256)": FunctionFragment;
    "observe(uint32[])": FunctionFragment;
    "slot0()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "observations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "observe",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "slot0", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;

  events: {};
}

export class MockObservations extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockObservationsInterface;

  functions: {
    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulativeX128: BigNumber;
      initialized: boolean;
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    "observations(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulativeX128: BigNumber;
      initialized: boolean;
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    slot0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;

    "slot0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;
  };

  observations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    blockTimestamp: number;
    tickCumulative: BigNumber;
    secondsPerLiquidityCumulativeX128: BigNumber;
    initialized: boolean;
    0: number;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
  }>;

  "observations(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    blockTimestamp: number;
    tickCumulative: BigNumber;
    secondsPerLiquidityCumulativeX128: BigNumber;
    initialized: boolean;
    0: number;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
  }>;

  observe(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<{
    tickCumulatives: BigNumber[];
    secondsPerLiquidityCumulativeX128s: BigNumber[];
    0: BigNumber[];
    1: BigNumber[];
  }>;

  "observe(uint32[])"(
    secondsAgos: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<{
    tickCumulatives: BigNumber[];
    secondsPerLiquidityCumulativeX128s: BigNumber[];
    0: BigNumber[];
    1: BigNumber[];
  }>;

  slot0(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: boolean;
  }>;

  "slot0()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: boolean;
  }>;

  callStatic: {
    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulativeX128: BigNumber;
      initialized: boolean;
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    "observations(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulativeX128: BigNumber;
      initialized: boolean;
      0: number;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      tickCumulatives: BigNumber[];
      secondsPerLiquidityCumulativeX128s: BigNumber[];
      0: BigNumber[];
      1: BigNumber[];
    }>;

    slot0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;

    "slot0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: boolean;
    }>;
  };

  filters: {};

  estimateGas: {
    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observations(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slot0(overrides?: CallOverrides): Promise<BigNumber>;

    "slot0()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    observations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observations(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    observe(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observe(uint32[])"(
      secondsAgos: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "slot0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
