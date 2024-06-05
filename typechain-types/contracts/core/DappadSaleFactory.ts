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

export declare namespace IDappadSaleFactory {
  export type SaleFactoryParamsStruct = { adminAddress: AddressLike };

  export type SaleFactoryParamsStructOutput = [adminAddress: string] & {
    adminAddress: string;
  };
}

export declare namespace IDappadSale {
  export type SaleDetailsStruct = {
    registerStart: BigNumberish;
    registerEnd: BigNumberish;
    registerTokenAmount: BigNumberish;
    saleStart: BigNumberish;
    saleEnd: BigNumberish;
    saleTokenPrice: BigNumberish;
    maxInvestmentAmount: BigNumberish;
    projectOwnerFeePercentage: BigNumberish;
    registerTokenEnabled: boolean;
    salePaused: boolean;
    saleName: string;
  };

  export type SaleDetailsStructOutput = [
    registerStart: bigint,
    registerEnd: bigint,
    registerTokenAmount: bigint,
    saleStart: bigint,
    saleEnd: bigint,
    saleTokenPrice: bigint,
    maxInvestmentAmount: bigint,
    projectOwnerFeePercentage: bigint,
    registerTokenEnabled: boolean,
    salePaused: boolean,
    saleName: string
  ] & {
    registerStart: bigint;
    registerEnd: bigint;
    registerTokenAmount: bigint;
    saleStart: bigint;
    saleEnd: bigint;
    saleTokenPrice: bigint;
    maxInvestmentAmount: bigint;
    projectOwnerFeePercentage: bigint;
    registerTokenEnabled: boolean;
    salePaused: boolean;
    saleName: string;
  };

  export type SaleFcfsDetailsStruct = {
    fcfsSaleDuration: BigNumberish;
    fcfsSaleMultiplier: BigNumberish;
  };

  export type SaleFcfsDetailsStructOutput = [
    fcfsSaleDuration: bigint,
    fcfsSaleMultiplier: bigint
  ] & { fcfsSaleDuration: bigint; fcfsSaleMultiplier: bigint };

  export type SaleRefundDetailsStruct = {
    refundDuration: BigNumberish;
    refundEnabled: boolean;
  };

  export type SaleRefundDetailsStructOutput = [
    refundDuration: bigint,
    refundEnabled: boolean
  ] & { refundDuration: bigint; refundEnabled: boolean };

  export type SaleTicketDetailsStruct = {
    ticketPrice: BigNumberish;
    ticketMerkleRoot: BytesLike;
  };

  export type SaleTicketDetailsStructOutput = [
    ticketPrice: bigint,
    ticketMerkleRoot: string
  ] & { ticketPrice: bigint; ticketMerkleRoot: string };

  export type SaleAddressesStruct = {
    saleTokenAddress: AddressLike;
    registerTokenAddress: AddressLike;
    investmentTokenAddress: AddressLike;
    factoryContractAddress: AddressLike;
    nftContractAddress: AddressLike;
    stakeControllerContractAddress: AddressLike;
    vestingContractAddress: AddressLike;
    ownerAddress: AddressLike;
    adminAddress: AddressLike;
    launchpadFeeAddress: AddressLike;
    projectOwnerFeeAddress: AddressLike;
  };

  export type SaleAddressesStructOutput = [
    saleTokenAddress: string,
    registerTokenAddress: string,
    investmentTokenAddress: string,
    factoryContractAddress: string,
    nftContractAddress: string,
    stakeControllerContractAddress: string,
    vestingContractAddress: string,
    ownerAddress: string,
    adminAddress: string,
    launchpadFeeAddress: string,
    projectOwnerFeeAddress: string
  ] & {
    saleTokenAddress: string;
    registerTokenAddress: string;
    investmentTokenAddress: string;
    factoryContractAddress: string;
    nftContractAddress: string;
    stakeControllerContractAddress: string;
    vestingContractAddress: string;
    ownerAddress: string;
    adminAddress: string;
    launchpadFeeAddress: string;
    projectOwnerFeeAddress: string;
  };

  export type SaleStruct = {
    saleDetails: IDappadSale.SaleDetailsStruct;
    fcfsDetails: IDappadSale.SaleFcfsDetailsStruct;
    refundDetails: IDappadSale.SaleRefundDetailsStruct;
    ticketDetails: IDappadSale.SaleTicketDetailsStruct;
    saleAddresses: IDappadSale.SaleAddressesStruct;
  };

  export type SaleStructOutput = [
    saleDetails: IDappadSale.SaleDetailsStructOutput,
    fcfsDetails: IDappadSale.SaleFcfsDetailsStructOutput,
    refundDetails: IDappadSale.SaleRefundDetailsStructOutput,
    ticketDetails: IDappadSale.SaleTicketDetailsStructOutput,
    saleAddresses: IDappadSale.SaleAddressesStructOutput
  ] & {
    saleDetails: IDappadSale.SaleDetailsStructOutput;
    fcfsDetails: IDappadSale.SaleFcfsDetailsStructOutput;
    refundDetails: IDappadSale.SaleRefundDetailsStructOutput;
    ticketDetails: IDappadSale.SaleTicketDetailsStructOutput;
    saleAddresses: IDappadSale.SaleAddressesStructOutput;
  };

  export type SaleTierDetailsStruct = {
    minInvestmentAmount: BigNumberish;
    maxInvestmentAmount: BigNumberish;
    tierMaxInvestmentAmount: BigNumberish;
    ticketAmount: BigNumberish;
    whitelistMerkleRoot: BytesLike;
    totalInvestmentAmount: BigNumberish;
    totalParticipants: BigNumberish;
  };

  export type SaleTierDetailsStructOutput = [
    minInvestmentAmount: bigint,
    maxInvestmentAmount: bigint,
    tierMaxInvestmentAmount: bigint,
    ticketAmount: bigint,
    whitelistMerkleRoot: string,
    totalInvestmentAmount: bigint,
    totalParticipants: bigint
  ] & {
    minInvestmentAmount: bigint;
    maxInvestmentAmount: bigint;
    tierMaxInvestmentAmount: bigint;
    ticketAmount: bigint;
    whitelistMerkleRoot: string;
    totalInvestmentAmount: bigint;
    totalParticipants: bigint;
  };

  export type SaleParamsStruct = {
    sale: IDappadSale.SaleStruct;
    tierDetails: IDappadSale.SaleTierDetailsStruct[];
  };

  export type SaleParamsStructOutput = [
    sale: IDappadSale.SaleStructOutput,
    tierDetails: IDappadSale.SaleTierDetailsStructOutput[]
  ] & {
    sale: IDappadSale.SaleStructOutput;
    tierDetails: IDappadSale.SaleTierDetailsStructOutput[];
  };
}

export interface DappadSaleFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN"
      | "DEFAULT_ADMIN_ROLE"
      | "OWNER"
      | "allSales"
      | "createSale"
      | "getIsSaleActive"
      | "getRoleAdmin"
      | "getSale"
      | "getSaleCount"
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
      | "SaleCreated"
  ): EventFragment;

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allSales",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createSale",
    values: [IDappadSale.SaleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getIsSaleActive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleCount",
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
  decodeFunctionResult(functionFragment: "allSales", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIsSaleActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSaleCount",
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

export namespace SaleCreatedEvent {
  export type InputTuple = [
    saleName: string,
    saleStart: BigNumberish,
    saleEnd: BigNumberish,
    maxInvestmentAmount: BigNumberish,
    investmentTokenAddress: AddressLike,
    saleTokenAddress: AddressLike,
    factoryContractAddress: AddressLike
  ];
  export type OutputTuple = [
    saleName: string,
    saleStart: bigint,
    saleEnd: bigint,
    maxInvestmentAmount: bigint,
    investmentTokenAddress: string,
    saleTokenAddress: string,
    factoryContractAddress: string
  ];
  export interface OutputObject {
    saleName: string;
    saleStart: bigint;
    saleEnd: bigint;
    maxInvestmentAmount: bigint;
    investmentTokenAddress: string;
    saleTokenAddress: string;
    factoryContractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DappadSaleFactory extends BaseContract {
  connect(runner?: ContractRunner | null): DappadSaleFactory;
  waitForDeployment(): Promise<this>;

  interface: DappadSaleFactoryInterface;

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

  allSales: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createSale: TypedContractMethod<
    [_saleParams: IDappadSale.SaleParamsStruct],
    [boolean],
    "nonpayable"
  >;

  getIsSaleActive: TypedContractMethod<
    [index: BigNumberish],
    [boolean],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getSale: TypedContractMethod<[index: BigNumberish], [string], "view">;

  getSaleCount: TypedContractMethod<[], [bigint], "view">;

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
    nameOrSignature: "allSales"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createSale"
  ): TypedContractMethod<
    [_saleParams: IDappadSale.SaleParamsStruct],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getIsSaleActive"
  ): TypedContractMethod<[index: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSale"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getSaleCount"
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
    key: "SaleCreated"
  ): TypedContractEvent<
    SaleCreatedEvent.InputTuple,
    SaleCreatedEvent.OutputTuple,
    SaleCreatedEvent.OutputObject
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

    "SaleCreated(string,uint256,uint256,uint256,address,address,address)": TypedContractEvent<
      SaleCreatedEvent.InputTuple,
      SaleCreatedEvent.OutputTuple,
      SaleCreatedEvent.OutputObject
    >;
    SaleCreated: TypedContractEvent<
      SaleCreatedEvent.InputTuple,
      SaleCreatedEvent.OutputTuple,
      SaleCreatedEvent.OutputObject
    >;
  };
}
