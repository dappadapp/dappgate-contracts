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

export declare namespace IDappadVestingFactory {
  export type VestingFactoryParamsStruct = { adminAddress: AddressLike };

  export type VestingFactoryParamsStructOutput = [adminAddress: string] & {
    adminAddress: string;
  };
}

export declare namespace IDappadVesting {
  export type VestingStruct = {
    vestingCount: BigNumberish;
    vestingDuration: BigNumberish;
    vestingCliffDuration: BigNumberish;
    vestingPercentages: BigNumberish[];
    onTGE: boolean;
  };

  export type VestingStructOutput = [
    vestingCount: bigint,
    vestingDuration: bigint,
    vestingCliffDuration: bigint,
    vestingPercentages: bigint[],
    onTGE: boolean
  ] & {
    vestingCount: bigint;
    vestingDuration: bigint;
    vestingCliffDuration: bigint;
    vestingPercentages: bigint[];
    onTGE: boolean;
  };

  export type VestingAddressesStruct = {
    saleTokenAddress: AddressLike;
    factoryContractAddress: AddressLike;
    saleContractAddress: AddressLike;
    ownerAddress: AddressLike;
    adminAddress: AddressLike;
  };

  export type VestingAddressesStructOutput = [
    saleTokenAddress: string,
    factoryContractAddress: string,
    saleContractAddress: string,
    ownerAddress: string,
    adminAddress: string
  ] & {
    saleTokenAddress: string;
    factoryContractAddress: string;
    saleContractAddress: string;
    ownerAddress: string;
    adminAddress: string;
  };

  export type VestingSettingsStruct = {
    startDate: BigNumberish;
    saleTokenPrice: BigNumberish;
  };

  export type VestingSettingsStructOutput = [
    startDate: bigint,
    saleTokenPrice: bigint
  ] & { startDate: bigint; saleTokenPrice: bigint };

  export type VestingParamsStruct = {
    defaultVesting: IDappadVesting.VestingStruct;
    vestingAddresses: IDappadVesting.VestingAddressesStruct;
    vestingSettings: IDappadVesting.VestingSettingsStruct;
  };

  export type VestingParamsStructOutput = [
    defaultVesting: IDappadVesting.VestingStructOutput,
    vestingAddresses: IDappadVesting.VestingAddressesStructOutput,
    vestingSettings: IDappadVesting.VestingSettingsStructOutput
  ] & {
    defaultVesting: IDappadVesting.VestingStructOutput;
    vestingAddresses: IDappadVesting.VestingAddressesStructOutput;
    vestingSettings: IDappadVesting.VestingSettingsStructOutput;
  };
}

export interface DappadVestingFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN"
      | "DEFAULT_ADMIN_ROLE"
      | "OWNER"
      | "allVestings"
      | "createVesting"
      | "getRoleAdmin"
      | "getVesting"
      | "getVestingCount"
      | "grantRole"
      | "hasRole"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "StakeContractAddressUpdated"
      | "VestingCreated"
  ): EventFragment;

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allVestings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createVesting",
    values: [IDappadVesting.VestingParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVesting",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
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
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allVestings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVesting", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVestingCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
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

export namespace StakeContractAddressUpdatedEvent {
  export type InputTuple = [_stakeContractAddress: AddressLike];
  export type OutputTuple = [_stakeContractAddress: string];
  export interface OutputObject {
    _stakeContractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VestingCreatedEvent {
  export type InputTuple = [
    vestingCount: BigNumberish,
    vestingDuration: BigNumberish,
    vestingCliffDuration: BigNumberish,
    vestingPercentages: BigNumberish[],
    onTGE: boolean,
    saleTokenAddress: AddressLike,
    saleContractAddress: AddressLike,
    factoryContractAddress: AddressLike
  ];
  export type OutputTuple = [
    vestingCount: bigint,
    vestingDuration: bigint,
    vestingCliffDuration: bigint,
    vestingPercentages: bigint[],
    onTGE: boolean,
    saleTokenAddress: string,
    saleContractAddress: string,
    factoryContractAddress: string
  ];
  export interface OutputObject {
    vestingCount: bigint;
    vestingDuration: bigint;
    vestingCliffDuration: bigint;
    vestingPercentages: bigint[];
    onTGE: boolean;
    saleTokenAddress: string;
    saleContractAddress: string;
    factoryContractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DappadVestingFactory extends BaseContract {
  connect(runner?: ContractRunner | null): DappadVestingFactory;
  waitForDeployment(): Promise<this>;

  interface: DappadVestingFactoryInterface;

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

  ADMIN: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  OWNER: TypedContractMethod<[], [string], "view">;

  allVestings: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createVesting: TypedContractMethod<
    [_vestingParams: IDappadVesting.VestingParamsStruct],
    [boolean],
    "nonpayable"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getVesting: TypedContractMethod<[index: BigNumberish], [string], "view">;

  getVestingCount: TypedContractMethod<[], [bigint], "view">;

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

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OWNER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allVestings"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createVesting"
  ): TypedContractMethod<
    [_vestingParams: IDappadVesting.VestingParamsStruct],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getVesting"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getVestingCount"
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

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
  getEvent(
    key: "StakeContractAddressUpdated"
  ): TypedContractEvent<
    StakeContractAddressUpdatedEvent.InputTuple,
    StakeContractAddressUpdatedEvent.OutputTuple,
    StakeContractAddressUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "VestingCreated"
  ): TypedContractEvent<
    VestingCreatedEvent.InputTuple,
    VestingCreatedEvent.OutputTuple,
    VestingCreatedEvent.OutputObject
  >;

  filters: {
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

    "StakeContractAddressUpdated(address)": TypedContractEvent<
      StakeContractAddressUpdatedEvent.InputTuple,
      StakeContractAddressUpdatedEvent.OutputTuple,
      StakeContractAddressUpdatedEvent.OutputObject
    >;
    StakeContractAddressUpdated: TypedContractEvent<
      StakeContractAddressUpdatedEvent.InputTuple,
      StakeContractAddressUpdatedEvent.OutputTuple,
      StakeContractAddressUpdatedEvent.OutputObject
    >;

    "VestingCreated(uint256,uint256,uint256,uint256[],bool,address,address,address)": TypedContractEvent<
      VestingCreatedEvent.InputTuple,
      VestingCreatedEvent.OutputTuple,
      VestingCreatedEvent.OutputObject
    >;
    VestingCreated: TypedContractEvent<
      VestingCreatedEvent.InputTuple,
      VestingCreatedEvent.OutputTuple,
      VestingCreatedEvent.OutputObject
    >;
  };
}
