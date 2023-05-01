/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OracleSlippageTest } from "../OracleSlippageTest";

export class OracleSlippageTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides
  ): Promise<OracleSlippageTest> {
    return super.deploy(
      _factory,
      _WETH9,
      overrides || {}
    ) as Promise<OracleSlippageTest>;
  }
  getDeployTransaction(
    _factory: string,
    _WETH9: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  attach(address: string): OracleSlippageTest {
    return super.attach(address) as OracleSlippageTest;
  }
  connect(signer: Signer): OracleSlippageTest__factory {
    return super.connect(signer) as OracleSlippageTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleSlippageTest {
    return new Contract(address, _abi, signerOrProvider) as OracleSlippageTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
    inputs: [
      {
        internalType: "bytes[]",
        name: "paths",
        type: "bytes[]",
      },
      {
        internalType: "uint128[]",
        name: "amounts",
        type: "uint128[]",
      },
      {
        internalType: "uint24",
        name: "maximumTickDivergence",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "secondsAgo",
        type: "uint32",
      },
    ],
    name: "checkOracleSlippage",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint24",
        name: "maximumTickDivergence",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "secondsAgo",
        type: "uint32",
      },
    ],
    name: "checkOracleSlippage",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "registerPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "pool",
        type: "address",
      },
    ],
    name: "testGetBlockStartingAndCurrentTick",
    outputs: [
      {
        internalType: "int24",
        name: "blockStartingTick",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "currentTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "paths",
        type: "bytes[]",
      },
      {
        internalType: "uint128[]",
        name: "amounts",
        type: "uint128[]",
      },
      {
        internalType: "uint32",
        name: "secondsAgo",
        type: "uint32",
      },
    ],
    name: "testGetSyntheticTicks",
    outputs: [
      {
        internalType: "int256",
        name: "averageSyntheticAverageTick",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "averageSyntheticCurrentTick",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "secondsAgo",
        type: "uint32",
      },
    ],
    name: "testGetSyntheticTicks",
    outputs: [
      {
        internalType: "int256",
        name: "syntheticAverageTick",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "syntheticCurrentTick",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001b9938038062001b99833981016040819052620000349162000070565b6001600160601b0319606092831b8116608052911b1660a052620000a7565b80516001600160a01b03811681146200006b57600080fd5b919050565b6000806040838503121562000083578182fd5b6200008e8362000053565b91506200009e6020840162000053565b90509250929050565b60805160601c60a05160601c611ac8620000d1600039806102295250806102625250611ac86000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063ac810c6c11610076578063eaea4bfc1161005b578063eaea4bfc14610138578063efdeed8e1461014b578063f25801a71461015e576100a3565b8063ac810c6c1461010f578063c45a015514610130576100a3565b80630f64f6a9146100a85780631d31557e146100bd5780633beb26c4146100e75780634aa4a4fc146100fa575b600080fd5b6100bb6100b63660046117e4565b610171565b005b6100d06100cb3660046116a7565b610208565b6040516100de929190611977565b60405180910390f35b6100bb6100f53660046118d4565b610222565b610102610227565b6040516100de9190611942565b61012261011d3660046117c1565b61024b565b6040516100de929190611963565b610102610260565b6100d0610146366004611771565b610284565b6100bb610159366004611623565b61029c565b6100bb61016c36600461171c565b6102ff565b73ffffffffffffffffffffffffffffffffffffffff92831660008181526020818152604080832095871680845295825280832062ffffff9095168084529482528083208054979098167fffffffffffffffffffffffff000000000000000000000000000000000000000097881681179098559482528181528482209282529182528381209281529190522080549091169091179055565b600080610216858585610357565b91509150935093915050565b600155565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806102578361056a565b91509150915091565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806102918484610802565b915091509250929050565b6000806102aa868685610357565b915091508362ffffff16818303126102f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee906119f3565b60405180910390fd5b505050505050565b60008061030c8584610802565b915091508362ffffff1681830312610350576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee906119f3565b5050505050565b600080835185511461036857600080fd5b6000855167ffffffffffffffff8111801561038257600080fd5b506040519080825280602002602001820160405280156103bc57816020015b6103a9611476565b8152602001906001900390816103a15790505b5090506000865167ffffffffffffffff811180156103d957600080fd5b5060405190808252806020026020018201604052801561041357816020015b610400611476565b8152602001906001900390816103f85790505b50905060005b8751811015610543576000806104428a848151811061043457fe5b602002602001015189610802565b9150915061044f82610a8a565b85848151811061045b57fe5b60200260200101516000019060020b908160020b8152505061047c81610a8a565b84848151811061048857fe5b60200260200101516000019060020b908160020b815250508883815181106104ac57fe5b60200260200101518584815181106104c057fe5b6020026020010151602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff168152505088838151811061050257fe5b602002602001015184848151811061051657fe5b6020908102919091018101516fffffffffffffffffffffffffffffffff9092169101525050600101610419565b5061054d82610aa0565b60020b935061055b81610aa0565b60020b92505050935093915050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156105b657600080fd5b505afa1580156105ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ee919061183d565b50939750919550935050600161ffff841611915061063a9050576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee906119bc565b6000808673ffffffffffffffffffffffffffffffffffffffff1663252c09d7856040518263ffffffff1660e01b81526004016106769190611a2a565b60806040518083038186803b15801561068e57600080fd5b505afa1580156106a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c691906118ec565b5050915091506106d4610b8c565b63ffffffff168263ffffffff16146106ee578495506107f9565b60008361ffff1660018561ffff168761ffff1601038161070a57fe5b06905060008060008a73ffffffffffffffffffffffffffffffffffffffff1663252c09d7856040518263ffffffff1660e01b815260040161074b9190611a39565b60806040518083038186803b15801561076357600080fd5b505afa158015610777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079b91906118ec565b93505092509250806107d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee90611985565b82860363ffffffff811683870360060b816107f057fe5b059a5050505050505b50505050915091565b60008060008061081186610b92565b90506000805b82811015610a2f57600080600061082d8b610bbd565b9250925092506000610840848484610bee565b905060008063ffffffff8d16610869576108598361056a565b600291820b9350900b905061090b565b610873838e610c33565b8160020b915050809250508273ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156108c457600080fd5b505afa1580156108d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fc919061183d565b50505060029290920b93505050505b6001890387141561094c578473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1610995061095b565b6109558e611064565b9d508597505b60008715806109fc57508673ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16106109cc578673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16106109fc565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16105b90508015610a11579b82019b9a81019a610a1c565b828d039c50818c039b505b5050600190950194506108179350505050565b5082610a80577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff850294507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff840293505b5050509250929050565b80600281900b8114610a9b57600080fd5b919050565b6000806000805b8451811015610b3557848181518110610abc57fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff16858281518110610ae657fe5b60200260200101516000015160020b0283019250848181518110610b0657fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff16820191508080600101915050610aa7565b50808281610b3f57fe5b059250600082128015610b5a5750808281610b5657fe5b0715155b15610b85577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201915b5050919050565b60015490565b5160177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec9091010490565b60008080610bcb848261109f565b9250610bd884601461119f565b9050610be584601761109f565b91509193909250565b73ffffffffffffffffffffffffffffffffffffffff928316600090815260208181526040808320948616835293815283822062ffffff90931682529190915220541690565b60008063ffffffff8316610ca857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4250000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6040805160028082526060820183526000926020830190803683370190505090508381600081518110610cd757fe5b602002602001019063ffffffff16908163ffffffff1681525050600081600181518110610d0057fe5b63ffffffff9092166020928302919091018201526040517f883bdbfd00000000000000000000000000000000000000000000000000000000815260048101828152835160248301528351600093849373ffffffffffffffffffffffffffffffffffffffff8b169363883bdbfd9388939192839260449091019185820191028083838b5b83811015610d9b578181015183820152602001610d83565b505050509050019250505060006040518083038186803b158015610dbe57600080fd5b505afa158015610dd2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040908152811015610e1957600080fd5b8101908080516040519392919084640100000000821115610e3957600080fd5b908301906020820185811115610e4e57600080fd5b8251866020820283011164010000000082111715610e6b57600080fd5b82525081516020918201928201910280838360005b83811015610e98578181015183820152602001610e80565b5050505090500160405260200180516040519392919084640100000000821115610ec157600080fd5b908301906020820185811115610ed657600080fd5b8251866020820283011164010000000082111715610ef357600080fd5b82525081516020918201928201910280838360005b83811015610f20578181015183820152602001610f08565b5050505090500160405250505091509150600082600081518110610f4057fe5b602002602001015183600181518110610f5557fe5b6020026020010151039050600082600081518110610f6f57fe5b602002602001015183600181518110610f8457fe5b60200260200101510390508763ffffffff168260060b81610fa157fe5b05965060008260060b128015610fcb57508763ffffffff168260060b81610fc457fe5b0760060b15155b15610ff6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909601955b63ffffffff881673ffffffffffffffffffffffffffffffffffffffff0277ffffffffffffffffffffffffffffffffffffffff00000000602083901b1677ffffffffffffffffffffffffffffffffffffffffffffffff82168161105457fe5b0496505050505050509250929050565b80516060906110999083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe90161128f565b92915050565b60008182601401101561111357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561118657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b60008182600301101561121357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b816003018351101561128657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b60608182601f01101561130357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b82828401101561137457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b818301845110156113e657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b606082158015611405576040519150600082526020820160405261146d565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561143e578051835260209283019201611426565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b604080518082019091526000808252602082015290565b600082601f83011261149d578081fd5b813560206114b26114ad83611a66565b611a42565b82815281810190858301855b858110156114e7576114d5898684358b010161157b565b845292840192908401906001016114be565b5090979650505050505050565b600082601f830112611504578081fd5b813560206115146114ad83611a66565b8281528181019085830183850287018401881015611530578586fd5b855b858110156114e75781356fffffffffffffffffffffffffffffffff81168114611559578788fd5b84529284019290840190600101611532565b80518015158114610a9b57600080fd5b600082601f83011261158b578081fd5b813567ffffffffffffffff81111561159f57fe5b6115d060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611a42565b8181528460208386010111156115e4578283fd5b816020850160208301379081016020019190915292915050565b805161ffff81168114610a9b57600080fd5b803562ffffff81168114610a9b57600080fd5b60008060008060808587031215611638578384fd5b843567ffffffffffffffff8082111561164f578586fd5b61165b8883890161148d565b95506020870135915080821115611670578485fd5b5061167d878288016114f4565b93505061168c60408601611610565b9150606085013561169c81611aa9565b939692955090935050565b6000806000606084860312156116bb578283fd5b833567ffffffffffffffff808211156116d2578485fd5b6116de8783880161148d565b945060208601359150808211156116f3578384fd5b50611700868287016114f4565b925050604084013561171181611aa9565b809150509250925092565b600080600060608486031215611730578283fd5b833567ffffffffffffffff811115611746578384fd5b6117528682870161157b565b93505061176160208501611610565b9150604084013561171181611aa9565b60008060408385031215611783578182fd5b823567ffffffffffffffff811115611799578283fd5b6117a58582860161157b565b92505060208301356117b681611aa9565b809150509250929050565b6000602082840312156117d2578081fd5b81356117dd81611a84565b9392505050565b600080600080608085870312156117f9578384fd5b843561180481611a84565b9350602085013561181481611a84565b9250604085013561182481611a84565b915061183260608601611610565b905092959194509250565b600080600080600080600060e0888a031215611857578485fd5b875161186281611a84565b8097505060208801518060020b8114611879578586fd5b9550611887604089016115fe565b9450611895606089016115fe565b93506118a3608089016115fe565b925060a088015160ff811681146118b8578283fd5b91506118c660c0890161156b565b905092959891949750929550565b6000602082840312156118e5578081fd5b5035919050565b60008060008060808587031215611901578182fd5b845161190c81611aa9565b8094505060208501518060060b8114611923578283fd5b604086015190935061193481611a84565b91506118326060860161156b565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600292830b8152910b602082015260400190565b918252602082015260400190565b60208082526003908201527f4f4e490000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526003908201527f4e454f0000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526002908201527f5444000000000000000000000000000000000000000000000000000000000000604082015260600190565b61ffff91909116815260200190565b90815260200190565b60405181810167ffffffffffffffff81118282101715611a5e57fe5b604052919050565b600067ffffffffffffffff821115611a7a57fe5b5060209081020190565b73ffffffffffffffffffffffffffffffffffffffff81168114611aa657600080fd5b50565b63ffffffff81168114611aa657600080fdfea164736f6c6343000706000a";