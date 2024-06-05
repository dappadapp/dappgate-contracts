/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type TransactionStruct = {
  txType: BigNumberish;
  from: BigNumberish;
  to: BigNumberish;
  gasLimit: BigNumberish;
  gasPerPubdataByteLimit: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymaster: BigNumberish;
  nonce: BigNumberish;
  value: BigNumberish;
  reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
  data: BytesLike;
  signature: BytesLike;
  factoryDeps: BytesLike[];
  paymasterInput: BytesLike;
  reservedDynamic: BytesLike;
};

export type TransactionStructOutput = [
  txType: bigint,
  from: bigint,
  to: bigint,
  gasLimit: bigint,
  gasPerPubdataByteLimit: bigint,
  maxFeePerGas: bigint,
  maxPriorityFeePerGas: bigint,
  paymaster: bigint,
  nonce: bigint,
  value: bigint,
  reserved: [bigint, bigint, bigint, bigint],
  data: string,
  signature: string,
  factoryDeps: string[],
  paymasterInput: string,
  reservedDynamic: string
] & {
  txType: bigint;
  from: bigint;
  to: bigint;
  gasLimit: bigint;
  gasPerPubdataByteLimit: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymaster: bigint;
  nonce: bigint;
  value: bigint;
  reserved: [bigint, bigint, bigint, bigint];
  data: string;
  signature: string;
  factoryDeps: string[];
  paymasterInput: string;
  reservedDynamic: string;
};

export interface DappadPaymasterDefaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "OWNER"
      | "allowList"
      | "allowedToken"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isEnabled"
      | "postTransaction"
      | "priceForPayingFees"
      | "renounceRole"
      | "revokeRole"
      | "setAllowance"
      | "setBatchAllowance"
      | "setEnabled"
      | "setPriceForPayingFees"
      | "supportsInterface"
      | "validateAndPayForPaymasterTransaction"
      | "withdrawAll"
      | "withdrawErc20"
      | "withdrawNative"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllowlistUpdated"
      | "Enabled"
      | "PriceForPayingFeesUpdated"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isEnabled", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "postTransaction",
    values: [
      BytesLike,
      TransactionStruct,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "priceForPayingFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowance",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchAllowance",
    values: [AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "setEnabled", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setPriceForPayingFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAndPayForPaymasterTransaction",
    values: [BytesLike, BytesLike, TransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawErc20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNative",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isEnabled", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "postTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceForPayingFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEnabled", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPriceForPayingFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateAndPayForPaymasterTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNative",
    data: BytesLike
  ): Result;
}

export namespace AllowlistUpdatedEvent {
  export type InputTuple = [allowedAddress: AddressLike, isAllowed: boolean];
  export type OutputTuple = [allowedAddress: string, isAllowed: boolean];
  export interface OutputObject {
    allowedAddress: string;
    isAllowed: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnabledEvent {
  export type InputTuple = [enabled: boolean];
  export type OutputTuple = [enabled: boolean];
  export interface OutputObject {
    enabled: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceForPayingFeesUpdatedEvent {
  export type InputTuple = [newPrice: BigNumberish];
  export type OutputTuple = [newPrice: bigint];
  export interface OutputObject {
    newPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DappadPaymasterDefault extends BaseContract {
  connect(runner?: ContractRunner | null): DappadPaymasterDefault;
  waitForDeployment(): Promise<this>;

  interface: DappadPaymasterDefaultInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  OWNER: TypedContractMethod<[], [string], "view">;

  allowList: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  allowedToken: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isEnabled: TypedContractMethod<[], [boolean], "view">;

  postTransaction: TypedContractMethod<
    [
      _context: BytesLike,
      _transaction: TransactionStruct,
      arg2: BytesLike,
      arg3: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish
    ],
    [void],
    "payable"
  >;

  priceForPayingFees: TypedContractMethod<[], [bigint], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setAllowance: TypedContractMethod<
    [allowedAddress: AddressLike, allowed: boolean],
    [void],
    "nonpayable"
  >;

  setBatchAllowance: TypedContractMethod<
    [allowedAddresses: AddressLike[], allowances: boolean[]],
    [void],
    "nonpayable"
  >;

  setEnabled: TypedContractMethod<[enabled: boolean], [void], "nonpayable">;

  setPriceForPayingFees: TypedContractMethod<
    [newPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  validateAndPayForPaymasterTransaction: TypedContractMethod<
    [arg0: BytesLike, arg1: BytesLike, _transaction: TransactionStruct],
    [[string, string] & { magic: string; context: string }],
    "payable"
  >;

  withdrawAll: TypedContractMethod<[], [void], "nonpayable">;

  withdrawErc20: TypedContractMethod<[], [void], "nonpayable">;

  withdrawNative: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OWNER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowList"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "allowedToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "postTransaction"
  ): TypedContractMethod<
    [
      _context: BytesLike,
      _transaction: TransactionStruct,
      arg2: BytesLike,
      arg3: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "priceForPayingFees"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAllowance"
  ): TypedContractMethod<
    [allowedAddress: AddressLike, allowed: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBatchAllowance"
  ): TypedContractMethod<
    [allowedAddresses: AddressLike[], allowances: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setEnabled"
  ): TypedContractMethod<[enabled: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPriceForPayingFees"
  ): TypedContractMethod<[newPrice: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "validateAndPayForPaymasterTransaction"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BytesLike, _transaction: TransactionStruct],
    [[string, string] & { magic: string; context: string }],
    "payable"
  >;
  getFunction(
    nameOrSignature: "withdrawAll"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawErc20"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawNative"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "AllowlistUpdated"
  ): TypedContractEvent<
    AllowlistUpdatedEvent.InputTuple,
    AllowlistUpdatedEvent.OutputTuple,
    AllowlistUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Enabled"
  ): TypedContractEvent<
    EnabledEvent.InputTuple,
    EnabledEvent.OutputTuple,
    EnabledEvent.OutputObject
  >;
  getEvent(
    key: "PriceForPayingFeesUpdated"
  ): TypedContractEvent<
    PriceForPayingFeesUpdatedEvent.InputTuple,
    PriceForPayingFeesUpdatedEvent.OutputTuple,
    PriceForPayingFeesUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "AllowlistUpdated(address,bool)": TypedContractEvent<
      AllowlistUpdatedEvent.InputTuple,
      AllowlistUpdatedEvent.OutputTuple,
      AllowlistUpdatedEvent.OutputObject
    >;
    AllowlistUpdated: TypedContractEvent<
      AllowlistUpdatedEvent.InputTuple,
      AllowlistUpdatedEvent.OutputTuple,
      AllowlistUpdatedEvent.OutputObject
    >;

    "Enabled(bool)": TypedContractEvent<
      EnabledEvent.InputTuple,
      EnabledEvent.OutputTuple,
      EnabledEvent.OutputObject
    >;
    Enabled: TypedContractEvent<
      EnabledEvent.InputTuple,
      EnabledEvent.OutputTuple,
      EnabledEvent.OutputObject
    >;

    "PriceForPayingFeesUpdated(uint256)": TypedContractEvent<
      PriceForPayingFeesUpdatedEvent.InputTuple,
      PriceForPayingFeesUpdatedEvent.OutputTuple,
      PriceForPayingFeesUpdatedEvent.OutputObject
    >;
    PriceForPayingFeesUpdated: TypedContractEvent<
      PriceForPayingFeesUpdatedEvent.InputTuple,
      PriceForPayingFeesUpdatedEvent.OutputTuple,
      PriceForPayingFeesUpdatedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
