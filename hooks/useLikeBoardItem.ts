"use client";

import { useEffect, useMemo, useState } from "react";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { likeBoardAbi, likeBoardAddress } from "@/lib/contracts";
import { contentIdToBytes32, getLocalLikeState, markLocalLike } from "@/lib/local-likes";
import { trackTransaction } from "@/utils/track";

export function useLikeBoardItem(itemId: string) {
  const { address, isConnected } = useAccount();
  const [feedback, setFeedback] = useState("");
  const [localVersion, setLocalVersion] = useState(0);
  const idBytes = useMemo(() => contentIdToBytes32(itemId), [itemId]);
  const local = useMemo(() => getLocalLikeState(itemId, address), [address, itemId, localVersion]);

  const likesQuery = useReadContract({
    abi: likeBoardAbi,
    address: likeBoardAddress,
    functionName: "likes",
    args: [idBytes],
    query: {
      retry: 1,
    },
  });

  const likedQuery = useReadContract({
    abi: likeBoardAbi,
    address: likeBoardAddress,
    functionName: "liked",
    args: address ? [idBytes, address] : undefined,
    query: {
      enabled: Boolean(address),
      retry: 1,
    },
  });

  const { data: hash, isPending, writeContract, error } = useWriteContract();

  const receipt = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  });

  useEffect(() => {
    if (receipt.isSuccess && hash && address) {
      markLocalLike(itemId, address);
      setLocalVersion((value) => value + 1);
      likesQuery.refetch();
      likedQuery.refetch();
      setFeedback(`点赞成功，交易哈希 ${hash.slice(0, 10)}...`);
      trackTransaction("app-001", "like-board", address, hash);
    }
  }, [address, hash, itemId, likedQuery, likesQuery, receipt.isSuccess]);

  useEffect(() => {
    if (error) {
      setFeedback(error instanceof Error ? error.message : "交易未完成，请稍后重试。");
    }
  }, [error]);

  const likes = Number(likesQuery.data ?? BigInt(local.likes));
  const hasLiked = Boolean(likedQuery.data ?? local.hasLiked);

  const like = () => {
    if (!isConnected) {
      setFeedback("请先连接钱包。");
      return;
    }

    if (hasLiked) {
      setFeedback("这个内容你已经点过赞啦。");
      return;
    }

    setFeedback("等待钱包确认...");
    writeContract({
      abi: likeBoardAbi,
      address: likeBoardAddress,
      functionName: "like",
      args: [idBytes],
    });
  };

  return {
    likes,
    hasLiked,
    like,
    feedback,
    isPending: isPending || receipt.isLoading,
  };
}