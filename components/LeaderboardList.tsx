"use client";

import Link from "next/link";
import { LikeCounter } from "@/components/LikeCounter";
import { getItems } from "@/lib/mock-data";
import { useLikeBoardItem } from "@/hooks/useLikeBoardItem";

function LeaderboardEntry({ item, rank }: { item: ReturnType<typeof getItems>[number]; rank: number }) {
  const { likes } = useLikeBoardItem(item.id);

  return (
    <Link href={`/items/${item.id}`} className="leaderboard-card">
      <div className="leaderboard-rank">{rank}</div>
      <div>
        <div className="headline-note">{item.category}</div>
        <h3 style={{ marginTop: 8 }}>{item.title}</h3>
        <div className="small" style={{ marginTop: 6 }}>
          {item.mood}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <LikeCounter count={likes} label="likes" />
      </div>
    </Link>
  );
}

export function LeaderboardList() {
  const items = getItems();
  const sorted = [...items].sort((a, b) => b.mockLikes - a.mockLikes);

  return (
    <section className="board-card section-pad">
      <div className="badge-stack" style={{ marginBottom: 14 }}>
        <span className="sticker sticker-yellow">TOP {sorted.length}</span>
        <span className="sticker sticker-primary">热度榜</span>
      </div>
      <div className="ribbon-list">
        {sorted.map((item, index) => (
          <LeaderboardEntry key={item.id} item={item} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}


