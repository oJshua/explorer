import {
  object,
  StructType,
  number,
  optional,
  enums,
  any,
  boolean,
  string,
  array,
  pick,
  nullable,
} from "superstruct";
import { Pubkey } from "validators/pubkey";

export type TokenAccountType = StructType<typeof TokenAccountType>;
export const TokenAccountType = enums(["mint", "account", "multisig"]);

export type TokenAccountInfo = StructType<typeof TokenAccountInfo>;
export const TokenAccountInfo = pick({
  isInitialized: boolean(),
  isNative: boolean(),
  mint: Pubkey,
  owner: Pubkey,
  tokenAmount: pick({
    decimals: number(),
    uiAmount: number(),
    amount: string(),
  }),
  delegate: nullable(optional(Pubkey)),
  delegatedAmount: optional(number()),
});

export type MintAccountInfo = StructType<typeof MintAccountInfo>;
export const MintAccountInfo = object({
  decimals: number(),
  isInitialized: boolean(),
  owner: nullable(optional(Pubkey)),
});

export type MultisigAccountInfo = StructType<typeof MultisigAccountInfo>;
export const MultisigAccountInfo = object({
  numRequiredSigners: number(),
  numValidSigners: number(),
  isInitialized: boolean(),
  signers: array(Pubkey),
});

export type TokenAccount = StructType<typeof TokenAccount>;
export const TokenAccount = object({
  type: TokenAccountType,
  info: any(),
});
