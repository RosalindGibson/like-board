"use client";

import Link from "next/link";
import { useAccount } from "wagmi";
import { getItems } from "@/lib/mock-data";
import { useMyLikes } from "@/hooks/useMyLikes";

export function ActivityPanel() {
  const { isConnected } = useAccount();
  const { items } = useMyLikes();
  const total = getItems().length;

  return (
    <section className="board-card section-pad">
      <div className="row-between" style={{ marginBottom: 14 }}>
        <div>
          <div className="headline-note">Activity</div>
          <h2 style={{ margin: "8px 0 0", fontSize: "1.2rem" }}>互动小看板</h2>
        </div>
        <Link href="/likes" className="sticker sticker-green">
          我的贴纸册
        </Link>
      </div>
      <div className="grid-two">
        <div className="mini-panel">
          <div className="small">钱包状态</div>
          <strong style={{ display: "block", marginTop: 8 }}>
            {isConnected ? "已连接" : "未连接"}
          </strong>
        </div>
        <div className="mini-panel">
          <div className="small">我的点赞</div>
          <strong style={{ display: "block", marginTop: 8 }}>{items.length}</strong>
        </div>
        <div className="mini-panel">
          <div className="small">内容数量</div>
          <strong style={{ display: "block", marginTop: 8 }}>{total}</strong>
        </div>
        <div className="mini-panel">
          <div className="small">详情页</div>
          <strong style={{ display: "block", marginTop: 8 }}>独立可访问</strong>
        </div>
      </div>
    </section>
  );
}


