"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { BoardHeader } from "@/components/BoardHeader";
import { LikeButton } from "@/components/LikeButton";
import { LikeCounter } from "@/components/LikeCounter";
import { StatusChip } from "@/components/StatusChip";
import { WalletButton } from "@/components/WalletButton";
import { getItemById } from "@/lib/mock-data";
import { useLikeBoardItem } from "@/hooks/useLikeBoardItem";

export function ItemDetailScreen() {
  const params = useParams<{ id: string }>();
  const item = getItemById(params.id);

  if (!item) {
    notFound();
  }

  const itemState = useLikeBoardItem(item.id);

  return (
    <div className="paper-page">
      <BoardHeader
        eyebrow="Poster Detail"
        title="点赞详情"
        subtitle="数字、状态、按钮都在这一页中心。"
        aside={<WalletButton compact />}
      />

      <section className="board-card detail-poster">
        <div className="row-between">
          <div className="poster-id">Content ID / {item.id}</div>
          <StatusChip liked={itemState.hasLiked} />
        </div>

        <div>
          <div className="headline-note">{item.category}</div>
          <h1 style={{ margin: "10px 0 8px", fontSize: "1.7rem", lineHeight: 1.1 }}>
            {item.title}
          </h1>
          <p className="board-subtitle">{item.description}</p>
        </div>

        <div className="stats-strip">
          <div className="stat-box">
            <span className="small">Likes</span>
            <strong>{itemState.likes}</strong>
          </div>
          <div className="stat-box">
            <span className="small">Rule</span>
            <strong>1 / Wallet</strong>
          </div>
          <div className="stat-box">
            <span className="small">Mood</span>
            <strong>{item.mood}</strong>
          </div>
        </div>

        <LikeCounter count={itemState.likes} label="人已点过赞" size="large" />

        <LikeButton disabled={itemState.hasLiked} pending={itemState.isPending} onLike={itemState.like} helperText={itemState.feedback} />

        <div className="mini-panel">
          <div className="row-between">
            <span className="small">当前状态</span>
            <StatusChip liked={itemState.hasLiked} />
          </div>
          <div className="small" style={{ marginTop: 10 }}>
            链上合约：0x9ecd921bd63664b1b6c7a63b3826d7daa5392f6b
          </div>
        </div>

        <div className="row-between">
          <Link href="/items" className="sticker">
            返回内容墙
          </Link>
          <Link href="/likes" className="sticker sticker-yellow">
            看我的记录
          </Link>
        </div>
      </section>
    </div>
  );
}