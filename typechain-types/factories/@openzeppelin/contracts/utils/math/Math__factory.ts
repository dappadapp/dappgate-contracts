/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  Math,
  MathInterface,
} from "../../../../../@openzeppelin/contracts/utils/math/Math";

const _abi = [
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
] as const;

const _bytecode =
  "0x00000001012001900000000c0000613d0000008001000039000000400010043f0000000001000416000000000101004b0000000c0000c13d00000020010000390000010000100443000001200000044300000005010000410000000f0001042e000000000100001900000010000104300000000e000004320000000f0001042e00000010000104300000000000000000000000000000000000000000000000000000000200000000000000000000000000000040000001000000000000000000bbbce9870022380237d574ad078a656ae4ffc194b4bcf4bb056322247f515908";

type MathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Math__factory extends ContractFactory {
  constructor(...args: MathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Math & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Math__factory {
    return super.connect(runner) as Math__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathInterface {
    return new Interface(_abi) as MathInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Math {
    return new Contract(address, _abi, runner) as unknown as Math;
  }
}
