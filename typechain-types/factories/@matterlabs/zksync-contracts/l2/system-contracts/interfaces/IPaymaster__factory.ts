/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPaymaster,
  IPaymasterInterface,
} from "../../../../../../@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_context",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes",
          },
        ],
        internalType: "struct Transaction",
        name: "_transaction",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_txHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_suggestedSignedHash",
        type: "bytes32",
      },
      {
        internalType: "enum ExecutionResult",
        name: "_txResult",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_maxRefundedGas",
        type: "uint256",
      },
    ],
    name: "postTransaction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_txHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_suggestedSignedHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes32[]",
            name: "factoryDeps",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes",
          },
        ],
        internalType: "struct Transaction",
        name: "_transaction",
        type: "tuple",
      },
    ],
    name: "validateAndPayForPaymasterTransaction",
    outputs: [
      {
        internalType: "bytes4",
        name: "magic",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IPaymaster__factory {
  static readonly abi = _abi;
  static createInterface(): IPaymasterInterface {
    return new Interface(_abi) as IPaymasterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPaymaster {
    return new Contract(address, _abi, runner) as unknown as IPaymaster;
  }
}
