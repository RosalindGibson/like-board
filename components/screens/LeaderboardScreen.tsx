"use client";

import { BoardHeader } from "@/components/BoardHeader";
import { LeaderboardList } from "@/components/LeaderboardList";
import { WalletButton } from "@/components/WalletButton";

export function LeaderboardScreen() {
  return (
    <div className="paper-page">
      <BoardHeader
        eyebrow="Hot Board"
        title="点赞排行榜"
        subtitle="这一页只强调名次、热度和正在被喜欢的内容。"
        aside={<WalletButton compact />}
      />
      <LeaderboardList />
    </div>
  );
}