"use client";

import Link from "next/link";
import { BoardHeader } from "@/components/BoardHeader";
import { EmptyState } from "@/components/EmptyState";
import { StatusChip } from "@/components/StatusChip";
import { WalletButton } from "@/components/WalletButton";
import { useMyLikes } from "@/hooks/useMyLikes";

export function LikesScreen() {
  const { items, isConnected } = useMyLikes();

  return (
    <div className="paper-page">
      <BoardHeader
        eyebrow="My Sticker Book"
        title="我的点赞记录"
        subtitle="像贴纸册一样翻看自己点过的内容。"
        aside={<WalletButton compact />}
      />

      <section className="board-card section-pad">
        {!isConnected ? (
          <EmptyState title="先连接钱包" description="连接后就能查看你点过赞的内容。" actionLabel="去内容墙" href="/items" />
        ) : items.length === 0 ? (
          <EmptyState title="还没有贴纸" description="你还没点赞任何内容，先去挑一张喜欢的。" actionLabel="去点赞" href="/items" />
        ) : (
          <div className="ribbon-list">
            {items.map((item, index) => (
              <Link key={item.id} href={`/items/${item.id}`} className="board-card section-pad">
                <div className="row-between">
                  <div>
                    <div className="headline-note">Record #{index + 1}</div>
                    <h3 style={{ margin: "10px 0 6px" }}>{item.title}</h3>
                    <div className="small">{item.description}</div>
                  </div>
                  <StatusChip liked />
                </div>
                <div className="row-between" style={{ marginTop: 14 }}>
                  <span className="sticker sticker-green">{item.category}</span>
                  <span className="small">已记录</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}