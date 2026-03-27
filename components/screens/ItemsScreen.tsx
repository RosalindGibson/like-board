"use client";

import { BoardHeader } from "@/components/BoardHeader";
import { ContentGrid } from "@/components/ContentGrid";
import { getItems } from "@/lib/mock-data";
import { WalletButton } from "@/components/WalletButton";

export function ItemsScreen() {
  const items = getItems();

  return (
    <div className="paper-page">
      <BoardHeader
        eyebrow="Content Wall"
        title="内容公告板"
        subtitle="每一张贴纸都能点进去，状态和热度一眼就能看到。"
        aside={<WalletButton compact />}
      />

      <section className="board-card section-pad">
        <div className="badge-stack" style={{ marginBottom: 14 }}>
          <span className="sticker sticker-yellow">内容 {items.length}</span>
          <span className="sticker">一人一次</span>
          <span className="sticker sticker-green">独立详情页</span>
        </div>
        <ContentGrid items={items} />
      </section>
    </div>
  );
}