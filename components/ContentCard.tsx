"use client";

import Link from "next/link";
import { ContentItem } from "@/lib/mock-data";
import { LikeCounter } from "@/components/LikeCounter";
import { StatusChip } from "@/components/StatusChip";
import { useLikeBoardItem } from "@/hooks/useLikeBoardItem";

type ContentCardProps = {
  item: ContentItem;
  index: number;
};

const tilts = ["-1.4deg", "1.2deg", "-0.6deg", "1.6deg", "-1deg", "0.8deg"];

export function ContentCard({ item, index }: ContentCardProps) {
  const { likes, hasLiked } = useLikeBoardItem(item.id);

  return (
    <Link
      href={`/items/${item.id}`}
      className="content-card"
      style={{ background: item.cardColor, ["--tilt" as string]: tilts[index % tilts.length] }}
    >
      <div className="row-between" style={{ alignItems: "flex-start" }}>
        <span className="sticker">{item.category}</span>
        <StatusChip liked={hasLiked} />
      </div>
      <div>
        <div className="headline-note">{item.mood}</div>
        <h3 style={{ marginTop: 10 }}>{item.title}</h3>
        <p style={{ marginTop: 8 }}>{item.description}</p>
      </div>
      <div className="row-between">
        <LikeCounter count={likes} label="likes" />
        <span className="sticker sticker-primary">打开</span>
      </div>
    </Link>
  );
}


