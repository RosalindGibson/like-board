"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

function shortenAddress(address?: string) {
  if (!address) {
    return "连接钱包";
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletButton({ compact = false }: { compact?: boolean }) {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button className="wallet-button" onClick={() => disconnect()}>
        {compact ? shortenAddress(address) : `已连接 ${shortenAddress(address)}`}
      </button>
    );
  }

  return (
    <div className="wallet-stack">
      <button
        className="wallet-button"
        disabled={isPending || connectors.length === 0}
        onClick={() => {
          const connector = connectors[0];
          if (connector) {
            connect({ connector });
          }
        }}
      >
        {isPending ? "连接中..." : compact ? "连接" : "连接钱包"}
      </button>
    </div>
  );
}