/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ImmutableStateTest } from "../ImmutableStateTest";

export class ImmutableStateTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factoryV2: string,
    _positionManager: string,
    overrides?: Overrides
  ): Promise<ImmutableStateTest> {
    return super.deploy(
      _factoryV2,
      _positionManager,
      overrides || {}
    ) as Promise<ImmutableStateTest>;
  }
  getDeployTransaction(
    _factoryV2: string,
    _positionManager: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factoryV2,
      _positionManager,
      overrides || {}
    );
  }
  attach(address: string): ImmutableStateTest {
    return super.attach(address) as ImmutableStateTest;
  }
  connect(signer: Signer): ImmutableStateTest__factory {
    return super.connect(signer) as ImmutableStateTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ImmutableStateTest {
    return new Contract(address, _abi, signerOrProvider) as ImmutableStateTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryV2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factoryV2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "positionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161013b38038061013b8339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c60c161007a600039806092525080606e525060c16000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806368e0d4e1146037578063791b98bc146066575b600080fd5b603d606c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b603d6090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000008156fea164736f6c6343000706000a";
