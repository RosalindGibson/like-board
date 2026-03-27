import { injected } from "@wagmi/core";
import { Attribution } from "ox/erc8021";
import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";

export const BUILDER_CODE = "bc_e2ehtn73";
export const PROVIDED_DATA_SUFFIX =
  "0x62635f65326568746e37330b0080218021802180218021802180218021";
export const DATA_SUFFIX = Attribution.toDataSuffix({
  codes: [BUILDER_CODE],
});

if (DATA_SUFFIX !== PROVIDED_DATA_SUFFIX) {
  throw new Error("Builder Code dataSuffix mismatch.");
}

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  dataSuffix: DATA_SUFFIX,
  transports: {
    [base.id]: http(),
  },
});