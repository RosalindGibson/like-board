"use client";

import { useMemo } from "react";
import { useAccount } from "wagmi";
import { getItems } from "@/lib/mock-data";
import { getMyLocalLikes } from "@/lib/local-likes";

export function useMyLikes() {
  const { address, isConnected } = useAccount();

  const items = useMemo(() => {
    const likedIds = new Set(getMyLocalLikes(address));
    return getItems().filter((item) => likedIds.has(item.id));
  }, [address]);

  return {
    items,
    isConnected,
  };
}


