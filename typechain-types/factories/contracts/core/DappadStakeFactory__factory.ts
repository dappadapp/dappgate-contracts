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
import type { NonPayableOverrides } from "../../../common";
import type {
  DappadStakeFactory,
  DappadStakeFactoryInterface,
  IDappadStakeFactory,
} from "../../../contracts/core/DappadStakeFactory";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "adminAddress",
            type: "address",
          },
        ],
        internalType: "struct IDappadStakeFactory.StakeFactoryParams",
        name: "stakeFactoryParams",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidStakeIndexError",
    type: "error",
  },
  {
    inputs: [],
    name: "UnauthorizedError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stakeContractAddress",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "interestRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDuration",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDurationRewardMultiplier",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDurationPointMultiplier",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "stakePaused",
                type: "bool",
              },
            ],
            internalType: "struct IDappadStake.StakeDetails",
            name: "stakeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "ownerAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "adminAddress",
                type: "address",
              },
            ],
            internalType: "struct IDappadStake.StakeAddresses",
            name: "stakeAddresses",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct IDappadStake.StakeParams",
        name: "stakeParams",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    name: "StakeCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allStakes",
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
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "interestRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDuration",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDurationRewardMultiplier",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDurationPointMultiplier",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "stakePaused",
                type: "bool",
              },
            ],
            internalType: "struct IDappadStake.StakeDetails",
            name: "stakeDetails",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "ownerAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "adminAddress",
                type: "address",
              },
            ],
            internalType: "struct IDappadStake.StakeAddresses",
            name: "stakeAddresses",
            type: "tuple",
          },
        ],
        internalType: "struct IDappadStake.StakeParams",
        name: "_stakeParams",
        type: "tuple",
      },
    ],
    name: "createStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getStake",
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
    name: "getStakeCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0002000000000002000400000000000200000000030100190000006003300270000001180330019700010000003103550000000102200190000000260000c13d0000008002000039000000400020043f000000040230008c000002730000413d000000000201043b000000e002200270000001270420009c000000550000a13d000001280420009c0000006c0000a13d000001290420009c000000ca0000213d0000012c0420009c000001a10000613d0000012d0220009c000002730000c13d0000000002000416000000000202004b000002730000c13d000000040230008a000000200220008c000002730000413d0000000401100370000000000101043b0000000102000039000000000202041a000000000221004b000000da0000413d0000013901000041000002870000013d0000000002000416000000000202004b000002730000c13d00000119023000410000011a0220009c0000004f0000a13d0000009f023000390000011b02200197000000400020043f0000001f0230018f00000005043002720000003b0000613d00000000050000190000000506500210000000000761034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b000000330000413d000000000502004b0000004a0000613d0000000504400210000000000141034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000101043b0000010002200089000000000121022f00000000012101cf000000000151019f0000000000140435000000200130008c000002730000413d000000400300043d0000011c0130009c000000e90000a13d000001460100004100000000001004350000004101000039000000040010043f00000147010000410000045e00010430000001310420009c000000780000213d000001350420009c000002170000613d000001360420009c000002290000613d000001370220009c000002730000c13d0000000002000416000000000202004b000002730000c13d000000040230008a000000200220008c000002730000413d0000000401100370000000000101043b0000000000100435000000200000043f00000040020000390000000001000019045c043c0000040f0000000101100039000002650000013d0000012e0420009c0000022e0000613d0000012f0420009c0000023e0000613d000001300120009c000002730000c13d0000000001000416000000000101004b000002730000c13d000000800000043f0000014a010000410000045d0001042e000001320420009c0000025c0000613d000001330420009c000002610000613d000001340220009c000002730000c13d0000000002000416000000000202004b000002730000c13d000000040230008a000000400220008c000002730000413d0000000402100370000000000302043b0000002401100370000000000101043b000400000001001d0000011d0110009c000002730000213d0000000000300435000000200000043f00000118040000410000000001000414000001180210009c0000000001048019000000c0011002100000011f011001c70000801002000039000300000003001d045c04570000040f0000000102200190000002730000613d000000000101043b0000000101100039000000000101041a000200000001001d0000000000100435000000200000043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b0000000002000411000100000002001d0000000000200435000000200010043f00000118010000410000000002000414000001180320009c0000000002018019000000c0012002100000011f011001c70000801002000039045c04570000040f00000003030000290000000102200190000002730000613d000000000101043b000000000101041a000000ff011001900000028a0000c13d000000400100043d0000002402100039000000020300002900000000003204350000014c0200004100000000002104350000000402100039000000010300002900000000003204350000011802000041000001180310009c000000000102801900000040011002100000014d011001c70000045e000104300000012a0420009c000002690000613d0000012b0220009c000002730000c13d0000000002000416000000000202004b000002730000c13d000000040230008a000000200220008c000002730000413d0000000401100370000000000101043b0000000102000039000000000202041a000000000221004b000002730000813d045c03a80000040f0000000302200210000000000101041a000000000121022f0000011d01100197000000ff0220008c0000000001002019000000400200043d00000000001204350000011801000041000001180320009c0000000002018019000000400120021000000138011001c70000045d0001042e0000002001300039000000400010043f000000800100043d0000011d0210009c000002730000213d00000000001304350000011e010000410000000000100435000000200000043f00000118040000410000000001000414000001180210009c0000000001048019000000c0011002100000011f011001c70000801002000039000400000003001d045c04570000040f0000000102200190000002730000613d000000000101043b0000000101100039000000000601041a0000011e02000041000000000021041b0000000001000414000001180210009c0000011801008041000000c00110021000000120011001c70000800d02000039000000040300003900000121040000410000011e050000410000011e07000041045c04520000040f0000000101200190000002730000613d0000012201000041000000000010043500000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b0000000101100039000000000601041a0000011e02000041000000000021041b0000000001000414000001180210009c0000011801008041000000c00110021000000120011001c70000800d020000390000000403000039000001210400004100000122050000410000011e07000041045c04520000040f0000000101200190000002730000613d0000000001000411000200000001001d0000011d01100197000300000001001d00000000001004350000012301000041000000200010043f00000118010000410000000002000414000001180320009c0000000002018019000000c0012002100000011f011001c70000801002000039045c04570000040f00000004030000290000000102200190000002730000613d000000000101043b000000000101041a000000ff01100190000001660000c13d000000030100002900000000001004350000012301000041000000200010043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b000000000201041a000001000300008a000000000232016f00000001022001bf000000000021041b0000000001000414000001180210009c0000011801008041000000c00110021000000120011001c70000800d02000039000000040300003900000124040000410000011e0500004100000003060000290000000207000029045c04520000040f00000004030000290000000101200190000002730000613d00000000010304330000011d01100197000400000001001d00000000001004350000012501000041000000200010043f00000118010000410000000002000414000001180320009c0000000002018019000000c0012002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b000000000101041a000000ff011001900000019c0000c13d000000040100002900000000001004350000012501000041000000200010043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b000000000201041a000001000300008a000000000232016f00000001022001bf000000000021041b0000000001000414000001180210009c0000011801008041000000c00110021000000120011001c70000800d0200003900000004030000390000012404000041000001220500004100000004060000290000000207000029045c04520000040f0000000101200190000002730000613d00000020010000390000010000100443000001200000044300000126010000410000045d0001042e0000000002000416000000000202004b000002730000c13d000000040230008a000001000220008c000002730000413d0000016002000039000000400020043f0000000403100370000000000303043b000000c00030043f0000002403100370000000000303043b000000e00030043f0000004403100370000000000303043b000001000030043f0000006403100370000000000303043b000001200030043f0000008403100370000000000303043b000000000403004b0000000004000019000000010400c039000000000443004b000002730000c13d000001400030043f000000c003000039000000800030043f000001c003000039000000400030043f000000a403100370000000000303043b0000011d0430009c000002730000213d000001600030043f000000c403100370000000000303043b0000011d0430009c000002730000213d000001800030043f000000e401100370000000000101043b0000011d0310009c000002730000213d000001a00010043f000000a00020043f0000011e010000410000000000100435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b0000000002000411000400000002001d0000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b000000000101041a000000ff01100190000002d80000c13d00000122010000410000000000100435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b00000004020000290000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b000000000101041a000000ff01100190000002d80000c13d000000400100043d000001480200004100000000002104350000011802000041000001180310009c0000000001028019000000400110021000000149011001c70000045e000104300000000002000416000000000202004b000002730000c13d000000040230008a000000200220008c000002730000413d0000000401100370000000000101043b0000014e02100197000000000221004b000002730000c13d0000014f0210009c00000000020000190000000102006039000001500110009c00000001022061bf000000010120018f000002660000013d0000000001000416000000000101004b000002730000c13d0000011e01000041000002660000013d0000000002000416000000000202004b000002730000c13d000000040230008a000000400220008c000002730000413d0000002402100370000000000302043b0000011d0230009c000002730000213d0000000002000411000000000323004b000002860000c13d0000000401100370000000000101043b000002830000013d0000000002000416000000000202004b000002730000c13d000000040230008a000000400220008c000002730000413d0000002402100370000000000302043b0000011d0230009c000002730000213d0000000401100370000000000101043b0000000000100435000000200000043f0000004002000039000400000002001d0000000001000019000300000003001d045c043c0000040f00000003020000290000000000200435000000200010043f00000000010000190000000402000029045c043c0000040f000000000101041a000000ff011001900000000001000019000000010100c039000002660000013d0000000001000416000000000101004b000002730000c13d0000012201000041000002660000013d0000000001000416000000000101004b000002730000c13d0000000101000039000000000101041a000000800010043f0000014a010000410000045d0001042e0000000002000416000000000202004b000002730000c13d000000040230008a000000400220008c000002730000413d0000002402100370000000000302043b0000011d0230009c000002750000a13d00000000010000190000045e000104300000000401100370000000000101043b000400000001001d0000000000100435000000200000043f00000040020000390000000001000019000300000003001d045c043c0000040f0000000101100039000000000101041a045c03b60000040f00000004010000290000000302000029045c03e80000040f00000000010000190000045d0001042e0000014b01000041000000800010043f0000013a010000410000045e000104300000000000300435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b00000004020000290000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f00000003030000290000000102200190000002730000613d000000000101043b000000000101041a000000ff01100190000002d60000c13d0000000000300435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000002730000613d000000000101043b00000004020000290000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f00000003050000290000000102200190000002730000613d000000000101043b000000000201041a000001000300008a000000000232016f00000001022001bf000000000021041b00000118010000410000000002000414000001180320009c0000000002018019000000c00120021000000120011001c70000800d020000390000000403000039000001240400004100000004060000290000000107000029045c04520000040f0000000101200190000002730000613d00000000010000190000045d0001042e000000400100043d0000013b0210009c0000004f0000213d00000024021000390000013c030000410000000000320435000000800200043d0000000043020434000000840510003900000000003504350000000003040433000000a404100039000000000034043500000040032000390000000003030433000000c404100039000000000034043500000060032000390000000003030433000000e404100039000000000034043500000080022000390000000002020433000000000202004b0000000002000019000000010200c03900000104031000390000000000230435000000a00200043d00000000430204340000011d033001970000012405100039000000000035043500000000030404330000011d0330019700000144041000390000000000340435000000400220003900000000020204330000011d022001970000016403100039000000000023043500000064021000390000010003000039000000000400041400000000003204350000004402100039000000600300003900000000003204350000013d020000410000000000210435000000040210003900000000000204350000011802000041000001180310009c0000000001028019000001180340009c00000000040280190000004001100210000000c002400210000000000121019f0000013e011001c70000800602000039045c04520000040f0000000102200190000003200000613d000000000101043b000000000201004b0000034a0000c13d00000001010003670000000002000031000003250000013d000100000001035500000000020100190000006002200270000001180020019d0000011802200197000000400300043d0000001f0420018f0000000505200272000003320000613d000000000600001900000005076002100000000008730019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b0000032a0000413d000000000604004b000003410000613d0000000505500210000000000151034f00000000055300190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000011801000041000001180430009c0000000003018019000001180420009c000000000201801900000060012002100000004002300210000000000112019f0000045e000104300000000103000039000000000203041a0000013f0420009c0000004f0000213d0000000104200039000000000043041b00000000003004350000011d011001970000014002200041000000000302041a0000014103300197000000000313019f000000000032041b000000400500043d0000000001150436000000800200043d000000004302043400000000003104350000000001040433000000400350003900000000001304350000004001200039000000000101043300000060035000390000000000130435000000600120003900000000010104330000008003500039000000000013043500000080012000390000000001010433000000000101004b0000000001000019000000010100c039000000a0025000390000000000120435000000a00100043d00000000320104340000011d02200197000000c004500039000000000024043500000000020304330000011d02200197000000e0035000390000000000230435000000400110003900000000010104330000011d01100197000400000005001d000001000250003900000000001204350000014201000041000000000010043900000118030000410000000001000414000001180210009c0000000001038019000000c00110021000000143011001c70000800b02000039045c04570000040f0000000102200190000003a70000613d000000000101043b0000000403000029000001200230003900000000001204350000000001000414000001180210009c00000118040000410000000001048019000001180230009c00000000030480190000004002300210000000c001100210000000000121019f00000144011001c70000800d020000390000000103000039000400000003001d0000014504000041045c04520000040f0000000101200190000002730000613d000000400100043d000000040200002900000000002104350000011802000041000001180310009c0000000001028019000000400110021000000138011001c70000045d0001042e000000000001042f0000000102000039000000000302041a000000000313004b000003b00000a13d000000000020043500000140011000410000000002000019000000000001042d000001460100004100000000001004350000003201000039000000040010043f00000147010000410000045e000104300002000000000002000200000001001d0000000000100435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000003d70000613d000000000101043b0000000002000411000100000002001d0000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000003d70000613d000000000101043b000000000101041a000000ff01100190000003d90000613d000000000001042d00000000010000190000045e00010430000000400100043d0000002402100039000000020300002900000000003204350000014c0200004100000000002104350000000402100039000000010300002900000000003204350000011802000041000001180310009c000000000102801900000040011002100000014d011001c70000045e000104300002000000000002000100000002001d000200000001001d0000000000100435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000004390000613d000000000101043b00000001020000290000011d02200197000100000002001d0000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000004390000613d000000000101043b000000000101041a000000ff01100190000004380000613d00000002010000290000000000100435000000200000043f00000118030000410000000001000414000001180210009c0000000001038019000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000004390000613d000000000101043b00000001020000290000000000200435000000200010043f0000000001000414000001180210009c0000011801008041000000c0011002100000011f011001c70000801002000039045c04570000040f0000000102200190000004390000613d000000000101043b000000000201041a000001000300008a000000000232016f000000000021041b00000118010000410000000002000414000001180320009c0000000002018019000000c00120021000000120011001c70000800d0200003900000004030000390000000007000411000001510400004100000002050000290000000106000029045c04520000040f0000000101200190000004390000613d000000000001042d00000000010000190000045e00010430000000000001042f0000011803000041000001180410009c00000000010380190000004001100210000001180420009c00000000020380190000006002200210000000000112019f0000000002000414000001180420009c0000000002038019000000c002200210000000000112019f00000120011001c70000801002000039045c04570000040f0000000102200190000004500000613d000000000101043b000000000001042d00000000010000190000045e0001043000000455002104210000000102000039000000000001042d0000000002000019000000000001042d0000045a002104230000000102000039000000000001042d0000000002000019000000000001042d0000045c000004320000045d0001042e0000045e00010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009fffffffffffffffffffffffffffffffffffffffffffffffff000000000000007f00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000000000000000000000000000ffffffffffffffdf000000000000000000000000ffffffffffffffffffffffffffffffffffffffff6270edb7c868f86fda4adedba75108201087268ea345934db8bad688e1feb91b02000000000000000000000000000000000000400000000000000000000000000200000000000000000000000000000000000000000000000000000000000000bd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ffdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec421299b6a38f4cd1a4aadffdac39262d30244a01098753e138ed68abcfd87ee4812f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5cbfc8ee58ca47855df7bcf648dd304ddb6b932f9b87878bdf6318d7ec7ee5b700000002000000000000000000000000000000400000010000000000000000000000000000000000000000000000000000000000000000000000000036568abd00000000000000000000000000000000000000000000000000000000b378e46800000000000000000000000000000000000000000000000000000000d547741e00000000000000000000000000000000000000000000000000000000d547741f00000000000000000000000000000000000000000000000000000000efa8a33b00000000000000000000000000000000000000000000000000000000b378e46900000000000000000000000000000000000000000000000000000000ce325bf80000000000000000000000000000000000000000000000000000000036568abe0000000000000000000000000000000000000000000000000000000091d1485400000000000000000000000000000000000000000000000000000000a217fddf000000000000000000000000000000000000000000000000000000002a0acc69000000000000000000000000000000000000000000000000000000002a0acc6a000000000000000000000000000000000000000000000000000000002e4ab48a000000000000000000000000000000000000000000000000000000002f2ff15d0000000000000000000000000000000000000000000000000000000001ffc9a700000000000000000000000000000000000000000000000000000000117803e300000000000000000000000000000000000000000000000000000000248a9ca30000000000000000000000000000000000000020000000000000000000000000a9a32530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000800000000000000000000000000000000000000000000000000000000000000000ffffffffffffff7b0100078f07ca488e2b5e70906f2d884548ee0797e19ffae51d1ba0ae018589819c4d535bdea7cd8a978f128b93471df48c7dbab89d703809115bdc118c235bfd0200000000000000000000000000000000000184000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6ffffffffffffffffffffffff0000000000000000000000000000000000000000796b89b91644bc98cd93958e4c9038275d622183e25ac5af08cc6b5d955391320200000200000000000000000000000000000004000000000000000000000000020000000000000000000000000000000000014000000000000000000000000068785cfc6e22a1acd094e1fd68897e24ed1a78da2fe107fc9f2a6a79260618e04e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000008b5701f700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000008000000000000000006697b23200000000000000000000000000000000000000000000000000000000e2517d3f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000001ffc9a7000000000000000000000000000000000000000000000000000000007965db0b00000000000000000000000000000000000000000000000000000000f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b215cbf4d04d46e9e6bbeb40edce1c8d33a213e9707266ed0432b6d0bb526e2f9";

type DappadStakeFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DappadStakeFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DappadStakeFactory__factory extends ContractFactory {
  constructor(...args: DappadStakeFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    stakeFactoryParams: IDappadStakeFactory.StakeFactoryParamsStruct,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(stakeFactoryParams, overrides || {});
  }
  override deploy(
    stakeFactoryParams: IDappadStakeFactory.StakeFactoryParamsStruct,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(stakeFactoryParams, overrides || {}) as Promise<
      DappadStakeFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DappadStakeFactory__factory {
    return super.connect(runner) as DappadStakeFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DappadStakeFactoryInterface {
    return new Interface(_abi) as DappadStakeFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DappadStakeFactory {
    return new Contract(address, _abi, runner) as unknown as DappadStakeFactory;
  }
}
