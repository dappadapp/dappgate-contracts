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

export declare namespace IDappadStake {
  export type StakeDetailsStruct = {
    interestRate: BigNumberish;
    lockDuration: BigNumberish;
    lockDurationRewardMultiplier: BigNumberish;
    lockDurationPointMultiplier: BigNumberish;
    stakePaused: boolean;
  };

  export type StakeDetailsStructOutput = [
    interestRate: bigint,
    lockDuration: bigint,
    lockDurationRewardMultiplier: bigint,
    lockDurationPointMultiplier: bigint,
    stakePaused: boolean
  ] & {
    interestRate: bigint;
    lockDuration: bigint;
    lockDurationRewardMultiplier: bigint;
    lockDurationPointMultiplier: bigint;
    stakePaused: boolean;
  };

  export type StakeAddressesStruct = {
    tokenAddress: AddressLike;
    ownerAddress: AddressLike;
    adminAddress: AddressLike;
  };

  export type StakeAddressesStructOutput = [
    tokenAddress: string,
    ownerAddress: string,
    adminAddress: string
  ] & { tokenAddress: string; ownerAddress: string; adminAddress: string };

  export type StakeParamsStruct = {
    stakeDetails: IDappadStake.StakeDetailsStruct;
    stakeAddresses: IDappadStake.StakeAddressesStruct;
  };

  export type StakeParamsStructOutput = [
    stakeDetails: IDappadStake.StakeDetailsStructOutput,
    stakeAddresses: IDappadStake.StakeAddressesStructOutput
  ] & {
    stakeDetails: IDappadStake.StakeDetailsStructOutput;
    stakeAddresses: IDappadStake.StakeAddressesStructOutput;
  };

  export type StakeFeaturesStruct = {
    interestRate: BigNumberish;
    stakeTime: BigNumberish;
    stakedAmount: BigNumberish;
  };

  export type StakeFeaturesStructOutput = [
    interestRate: bigint,
    stakeTime: bigint,
    stakedAmount: bigint
  ] & { interestRate: bigint; stakeTime: bigint; stakedAmount: bigint };

  export type StakeStruct = {
    endTime: BigNumberish;
    totalStakedAmount: BigNumberish;
    totalStakePoints: BigNumberish;
    stakeCount: BigNumberish;
    stakeFeatures: IDappadStake.StakeFeaturesStruct[];
  };

  export type StakeStructOutput = [
    endTime: bigint,
    totalStakedAmount: bigint,
    totalStakePoints: bigint,
    stakeCount: bigint,
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[]
  ] & {
    endTime: bigint;
    totalStakedAmount: bigint;
    totalStakePoints: bigint;
    stakeCount: bigint;
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[];
  };

  export type StakeStatisticsStruct = {
    rewardBalance: BigNumberish;
    totalStakedAmount: BigNumberish;
    totalHarvestedRewardAmount: BigNumberish;
    totalParticipants: BigNumberish;
  };

  export type StakeStatisticsStructOutput = [
    rewardBalance: bigint,
    totalStakedAmount: bigint,
    totalHarvestedRewardAmount: bigint,
    totalParticipants: bigint
  ] & {
    rewardBalance: bigint;
    totalStakedAmount: bigint;
    totalHarvestedRewardAmount: bigint;
    totalParticipants: bigint;
  };
}

export interface DappadStakeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN"
      | "DEFAULT_ADMIN_ROLE"
      | "OWNER"
      | "addReward"
      | "calculateRewardAmount"
      | "emergencyOnly"
      | "emergencyUnstakeOverAmount"
      | "emergencyUnstakeOverReward"
      | "feeOverAmountPercentage"
      | "feeOverRewardPercentage"
      | "getRoleAdmin"
      | "getStakeStatistics"
      | "getUserStake"
      | "getUserStakeFeatures"
      | "grantRole"
      | "harvest"
      | "hasRole"
      | "isEmergencyOverAmountEnabled"
      | "isEmergencyOverRewardEnabled"
      | "renounceRole"
      | "restake"
      | "revokeRole"
      | "setFeeOverAmountPercentage"
      | "setFeeOverRewardPercentage"
      | "setInterestRate"
      | "setIsEmergencyOverAmountEnabled"
      | "setIsEmergencyOverRewardEnabled"
      | "setStakeDetails"
      | "setStakePaused"
      | "stake"
      | "stakeAddresses"
      | "stakeDetails"
      | "stakeStatistics"
      | "stakes"
      | "supportsInterface"
      | "token"
      | "unstake"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FeeUpdated"
      | "Harvested"
      | "InterestRateUpdated"
      | "Restaked"
      | "RewardAdded"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "StakeDetailsUpdated"
      | "StakePausedUpdated"
      | "Staked"
      | "Unstaked"
  ): EventFragment;

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewardAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyOnly",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyUnstakeOverAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyUnstakeOverReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeOverAmountPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeOverRewardPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeStatistics",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStake",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStakeFeatures",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "harvest", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isEmergencyOverAmountEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isEmergencyOverRewardEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "restake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeOverAmountPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeOverRewardPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsEmergencyOverAmountEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsEmergencyOverRewardEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakeDetails",
    values: [IDappadStake.StakeDetailsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakePaused",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakeStatistics",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyOnly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyUnstakeOverAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyUnstakeOverReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeOverAmountPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeOverRewardPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeStatistics",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStakeFeatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isEmergencyOverAmountEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isEmergencyOverRewardEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "restake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeOverAmountPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeOverRewardPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsEmergencyOverAmountEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsEmergencyOverRewardEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakePaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeStatistics",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
}

export namespace FeeUpdatedEvent {
  export type InputTuple = [stakePaused: BigNumberish];
  export type OutputTuple = [stakePaused: bigint];
  export interface OutputObject {
    stakePaused: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HarvestedEvent {
  export type InputTuple = [
    userAddress: AddressLike,
    userRewardAmount: BigNumberish,
    transferAmount: BigNumberish,
    stake: IDappadStake.StakeStruct,
    stakeFeatures: IDappadStake.StakeFeaturesStruct[],
    rewardBalance: BigNumberish,
    totalHarvestedRewardAmount: BigNumberish,
    harvestTime: BigNumberish
  ];
  export type OutputTuple = [
    userAddress: string,
    userRewardAmount: bigint,
    transferAmount: bigint,
    stake: IDappadStake.StakeStructOutput,
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[],
    rewardBalance: bigint,
    totalHarvestedRewardAmount: bigint,
    harvestTime: bigint
  ];
  export interface OutputObject {
    userAddress: string;
    userRewardAmount: bigint;
    transferAmount: bigint;
    stake: IDappadStake.StakeStructOutput;
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[];
    rewardBalance: bigint;
    totalHarvestedRewardAmount: bigint;
    harvestTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InterestRateUpdatedEvent {
  export type InputTuple = [interestRate: BigNumberish];
  export type OutputTuple = [interestRate: bigint];
  export interface OutputObject {
    interestRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RestakedEvent {
  export type InputTuple = [
    userAddress: AddressLike,
    userRewardAmount: BigNumberish,
    stake: IDappadStake.StakeStruct,
    stakeFeatures: IDappadStake.StakeFeaturesStruct[],
    totalStakedAmount: BigNumberish,
    totalHarvestedRewardAmount: BigNumberish,
    rewardBalance: BigNumberish,
    stakeTime: BigNumberish
  ];
  export type OutputTuple = [
    userAddress: string,
    userRewardAmount: bigint,
    stake: IDappadStake.StakeStructOutput,
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[],
    totalStakedAmount: bigint,
    totalHarvestedRewardAmount: bigint,
    rewardBalance: bigint,
    stakeTime: bigint
  ];
  export interface OutputObject {
    userAddress: string;
    userRewardAmount: bigint;
    stake: IDappadStake.StakeStructOutput;
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[];
    totalStakedAmount: bigint;
    totalHarvestedRewardAmount: bigint;
    rewardBalance: bigint;
    stakeTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardAddedEvent {
  export type InputTuple = [
    userAddress: AddressLike,
    amount: BigNumberish,
    rewardBalance: BigNumberish,
    rewardTime: BigNumberish
  ];
  export type OutputTuple = [
    userAddress: string,
    amount: bigint,
    rewardBalance: bigint,
    rewardTime: bigint
  ];
  export interface OutputObject {
    userAddress: string;
    amount: bigint;
    rewardBalance: bigint;
    rewardTime: bigint;
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

export namespace StakeDetailsUpdatedEvent {
  export type InputTuple = [_stakeDetails: IDappadStake.StakeDetailsStruct];
  export type OutputTuple = [
    _stakeDetails: IDappadStake.StakeDetailsStructOutput
  ];
  export interface OutputObject {
    _stakeDetails: IDappadStake.StakeDetailsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakePausedUpdatedEvent {
  export type InputTuple = [feePercentage: boolean];
  export type OutputTuple = [feePercentage: boolean];
  export interface OutputObject {
    feePercentage: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [
    userAddress: AddressLike,
    amount: BigNumberish,
    lockDurationIndex: BigNumberish,
    stake: IDappadStake.StakeStruct,
    stakeFeatures: IDappadStake.StakeFeaturesStruct[],
    totalParticipants: BigNumberish,
    totalStakedAmount: BigNumberish,
    stakeTime: BigNumberish
  ];
  export type OutputTuple = [
    userAddress: string,
    amount: bigint,
    lockDurationIndex: bigint,
    stake: IDappadStake.StakeStructOutput,
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[],
    totalParticipants: bigint,
    totalStakedAmount: bigint,
    stakeTime: bigint
  ];
  export interface OutputObject {
    userAddress: string;
    amount: bigint;
    lockDurationIndex: bigint;
    stake: IDappadStake.StakeStructOutput;
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[];
    totalParticipants: bigint;
    totalStakedAmount: bigint;
    stakeTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnstakedEvent {
  export type InputTuple = [
    userAddress: AddressLike,
    amount: BigNumberish,
    userRewardAmount: BigNumberish,
    totalRewardAmount: BigNumberish,
    stake: IDappadStake.StakeStruct,
    stakeFeatures: IDappadStake.StakeFeaturesStruct[],
    totalParticipants: BigNumberish,
    totalStakedAmount: BigNumberish,
    rewardBalance: BigNumberish,
    totalHarvestedRewardAmount: BigNumberish,
    stakeTime: BigNumberish
  ];
  export type OutputTuple = [
    userAddress: string,
    amount: bigint,
    userRewardAmount: bigint,
    totalRewardAmount: bigint,
    stake: IDappadStake.StakeStructOutput,
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[],
    totalParticipants: bigint,
    totalStakedAmount: bigint,
    rewardBalance: bigint,
    totalHarvestedRewardAmount: bigint,
    stakeTime: bigint
  ];
  export interface OutputObject {
    userAddress: string;
    amount: bigint;
    userRewardAmount: bigint;
    totalRewardAmount: bigint;
    stake: IDappadStake.StakeStructOutput;
    stakeFeatures: IDappadStake.StakeFeaturesStructOutput[];
    totalParticipants: bigint;
    totalStakedAmount: bigint;
    rewardBalance: bigint;
    totalHarvestedRewardAmount: bigint;
    stakeTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DappadStake extends BaseContract {
  connect(runner?: ContractRunner | null): DappadStake;
  waitForDeployment(): Promise<this>;

  interface: DappadStakeInterface;

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

  addReward: TypedContractMethod<
    [amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  calculateRewardAmount: TypedContractMethod<
    [userAddress: AddressLike],
    [bigint],
    "view"
  >;

  emergencyOnly: TypedContractMethod<[], [boolean], "nonpayable">;

  emergencyUnstakeOverAmount: TypedContractMethod<
    [amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  emergencyUnstakeOverReward: TypedContractMethod<
    [amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  feeOverAmountPercentage: TypedContractMethod<[], [bigint], "view">;

  feeOverRewardPercentage: TypedContractMethod<[], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getStakeStatistics: TypedContractMethod<
    [],
    [IDappadStake.StakeStatisticsStructOutput],
    "view"
  >;

  getUserStake: TypedContractMethod<
    [userAddress: AddressLike],
    [IDappadStake.StakeStructOutput],
    "view"
  >;

  getUserStakeFeatures: TypedContractMethod<
    [userAddress: AddressLike, stakeIndex: BigNumberish],
    [IDappadStake.StakeFeaturesStructOutput],
    "view"
  >;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  harvest: TypedContractMethod<[], [boolean], "nonpayable">;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isEmergencyOverAmountEnabled: TypedContractMethod<[], [boolean], "view">;

  isEmergencyOverRewardEnabled: TypedContractMethod<[], [boolean], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  restake: TypedContractMethod<[], [boolean], "nonpayable">;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setFeeOverAmountPercentage: TypedContractMethod<
    [_fee: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  setFeeOverRewardPercentage: TypedContractMethod<
    [_fee: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  setInterestRate: TypedContractMethod<
    [interestRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setIsEmergencyOverAmountEnabled: TypedContractMethod<
    [_isEmergencyOverAmountEnabled: boolean],
    [boolean],
    "nonpayable"
  >;

  setIsEmergencyOverRewardEnabled: TypedContractMethod<
    [_isEmergencyOverRewardEnabled: boolean],
    [boolean],
    "nonpayable"
  >;

  setStakeDetails: TypedContractMethod<
    [_stakeDetails: IDappadStake.StakeDetailsStruct],
    [void],
    "nonpayable"
  >;

  setStakePaused: TypedContractMethod<
    [stakePaused: boolean],
    [boolean],
    "nonpayable"
  >;

  stake: TypedContractMethod<
    [amount: BigNumberish, lockDurationIndex: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  stakeAddresses: TypedContractMethod<
    [],
    [
      [string, string, string] & {
        tokenAddress: string;
        ownerAddress: string;
        adminAddress: string;
      }
    ],
    "view"
  >;

  stakeDetails: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, boolean] & {
        interestRate: bigint;
        lockDuration: bigint;
        lockDurationRewardMultiplier: bigint;
        lockDurationPointMultiplier: bigint;
        stakePaused: boolean;
      }
    ],
    "view"
  >;

  stakeStatistics: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        rewardBalance: bigint;
        totalStakedAmount: bigint;
        totalHarvestedRewardAmount: bigint;
        totalParticipants: bigint;
      }
    ],
    "view"
  >;

  stakes: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        endTime: bigint;
        totalStakedAmount: bigint;
        totalStakePoints: bigint;
        stakeCount: bigint;
      }
    ],
    "view"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  unstake: TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;

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
    nameOrSignature: "addReward"
  ): TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "calculateRewardAmount"
  ): TypedContractMethod<[userAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "emergencyOnly"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "emergencyUnstakeOverAmount"
  ): TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "emergencyUnstakeOverReward"
  ): TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "feeOverAmountPercentage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeOverRewardPercentage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getStakeStatistics"
  ): TypedContractMethod<
    [],
    [IDappadStake.StakeStatisticsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserStake"
  ): TypedContractMethod<
    [userAddress: AddressLike],
    [IDappadStake.StakeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserStakeFeatures"
  ): TypedContractMethod<
    [userAddress: AddressLike, stakeIndex: BigNumberish],
    [IDappadStake.StakeFeaturesStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "harvest"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isEmergencyOverAmountEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isEmergencyOverRewardEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "restake"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFeeOverAmountPercentage"
  ): TypedContractMethod<[_fee: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeOverRewardPercentage"
  ): TypedContractMethod<[_fee: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "setInterestRate"
  ): TypedContractMethod<[interestRate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIsEmergencyOverAmountEnabled"
  ): TypedContractMethod<
    [_isEmergencyOverAmountEnabled: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setIsEmergencyOverRewardEnabled"
  ): TypedContractMethod<
    [_isEmergencyOverRewardEnabled: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setStakeDetails"
  ): TypedContractMethod<
    [_stakeDetails: IDappadStake.StakeDetailsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setStakePaused"
  ): TypedContractMethod<[stakePaused: boolean], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [amount: BigNumberish, lockDurationIndex: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeAddresses"
  ): TypedContractMethod<
    [],
    [
      [string, string, string] & {
        tokenAddress: string;
        ownerAddress: string;
        adminAddress: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakeDetails"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, boolean] & {
        interestRate: bigint;
        lockDuration: bigint;
        lockDurationRewardMultiplier: bigint;
        lockDurationPointMultiplier: bigint;
        stakePaused: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakeStatistics"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        rewardBalance: bigint;
        totalStakedAmount: bigint;
        totalHarvestedRewardAmount: bigint;
        totalParticipants: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakes"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        endTime: bigint;
        totalStakedAmount: bigint;
        totalStakePoints: bigint;
        stakeCount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unstake"
  ): TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;

  getEvent(
    key: "FeeUpdated"
  ): TypedContractEvent<
    FeeUpdatedEvent.InputTuple,
    FeeUpdatedEvent.OutputTuple,
    FeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Harvested"
  ): TypedContractEvent<
    HarvestedEvent.InputTuple,
    HarvestedEvent.OutputTuple,
    HarvestedEvent.OutputObject
  >;
  getEvent(
    key: "InterestRateUpdated"
  ): TypedContractEvent<
    InterestRateUpdatedEvent.InputTuple,
    InterestRateUpdatedEvent.OutputTuple,
    InterestRateUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Restaked"
  ): TypedContractEvent<
    RestakedEvent.InputTuple,
    RestakedEvent.OutputTuple,
    RestakedEvent.OutputObject
  >;
  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
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
  getEvent(
    key: "StakeDetailsUpdated"
  ): TypedContractEvent<
    StakeDetailsUpdatedEvent.InputTuple,
    StakeDetailsUpdatedEvent.OutputTuple,
    StakeDetailsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "StakePausedUpdated"
  ): TypedContractEvent<
    StakePausedUpdatedEvent.InputTuple,
    StakePausedUpdatedEvent.OutputTuple,
    StakePausedUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;
  getEvent(
    key: "Unstaked"
  ): TypedContractEvent<
    UnstakedEvent.InputTuple,
    UnstakedEvent.OutputTuple,
    UnstakedEvent.OutputObject
  >;

  filters: {
    "FeeUpdated(uint256)": TypedContractEvent<
      FeeUpdatedEvent.InputTuple,
      FeeUpdatedEvent.OutputTuple,
      FeeUpdatedEvent.OutputObject
    >;
    FeeUpdated: TypedContractEvent<
      FeeUpdatedEvent.InputTuple,
      FeeUpdatedEvent.OutputTuple,
      FeeUpdatedEvent.OutputObject
    >;

    "Harvested(address,uint256,uint256,tuple,tuple[],uint256,uint256,uint256)": TypedContractEvent<
      HarvestedEvent.InputTuple,
      HarvestedEvent.OutputTuple,
      HarvestedEvent.OutputObject
    >;
    Harvested: TypedContractEvent<
      HarvestedEvent.InputTuple,
      HarvestedEvent.OutputTuple,
      HarvestedEvent.OutputObject
    >;

    "InterestRateUpdated(uint256)": TypedContractEvent<
      InterestRateUpdatedEvent.InputTuple,
      InterestRateUpdatedEvent.OutputTuple,
      InterestRateUpdatedEvent.OutputObject
    >;
    InterestRateUpdated: TypedContractEvent<
      InterestRateUpdatedEvent.InputTuple,
      InterestRateUpdatedEvent.OutputTuple,
      InterestRateUpdatedEvent.OutputObject
    >;

    "Restaked(address,uint256,tuple,tuple[],uint256,uint256,uint256,uint256)": TypedContractEvent<
      RestakedEvent.InputTuple,
      RestakedEvent.OutputTuple,
      RestakedEvent.OutputObject
    >;
    Restaked: TypedContractEvent<
      RestakedEvent.InputTuple,
      RestakedEvent.OutputTuple,
      RestakedEvent.OutputObject
    >;

    "RewardAdded(address,uint256,uint256,uint256)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
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

    "StakeDetailsUpdated(tuple)": TypedContractEvent<
      StakeDetailsUpdatedEvent.InputTuple,
      StakeDetailsUpdatedEvent.OutputTuple,
      StakeDetailsUpdatedEvent.OutputObject
    >;
    StakeDetailsUpdated: TypedContractEvent<
      StakeDetailsUpdatedEvent.InputTuple,
      StakeDetailsUpdatedEvent.OutputTuple,
      StakeDetailsUpdatedEvent.OutputObject
    >;

    "StakePausedUpdated(bool)": TypedContractEvent<
      StakePausedUpdatedEvent.InputTuple,
      StakePausedUpdatedEvent.OutputTuple,
      StakePausedUpdatedEvent.OutputObject
    >;
    StakePausedUpdated: TypedContractEvent<
      StakePausedUpdatedEvent.InputTuple,
      StakePausedUpdatedEvent.OutputTuple,
      StakePausedUpdatedEvent.OutputObject
    >;

    "Staked(address,uint256,uint256,tuple,tuple[],uint256,uint256,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;

    "Unstaked(address,uint256,uint256,uint256,tuple,tuple[],uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      UnstakedEvent.InputTuple,
      UnstakedEvent.OutputTuple,
      UnstakedEvent.OutputObject
    >;
    Unstaked: TypedContractEvent<
      UnstakedEvent.InputTuple,
      UnstakedEvent.OutputTuple,
      UnstakedEvent.OutputObject
    >;
  };
}