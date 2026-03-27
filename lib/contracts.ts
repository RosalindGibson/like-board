import { Address } from "viem";

export const likeBoardAddress = "0x9ecd921bd63664b1b6c7a63b3826d7daa5392f6b" as Address;

export const likeBoardAbi = [
  {
    type: "function",
    name: "like",
    stateMutability: "nonpayable",
    inputs: [{ name: "id", type: "bytes32" }],
    outputs: [],
  },
  {
    type: "function",
    name: "likes",
    stateMutability: "view",
    inputs: [{ name: "", type: "bytes32" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "liked",
    stateMutability: "view",
    inputs: [
      { name: "", type: "bytes32" },
      { name: "", type: "address" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
] as const;


