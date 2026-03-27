import { injected } from "@wagmi/core";
import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";

// TODO: Replace this suffix with the official Base Builder Code once you provide it.
export const BUILDER_CODE_SUFFIX = "TODO_REPLACE_WITH_BASE_BUILDER_CODE";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
});