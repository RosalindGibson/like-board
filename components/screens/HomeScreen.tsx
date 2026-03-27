"use client";

import Link from "next/link";
import { BoardHeader } from "@/components/BoardHeader";
import { WalletButton } from "@/components/WalletButton";
import { ActivityPanel } from "@/components/ActivityPanel";
import { ContentGrid } from "@/components/ContentGrid";
import { getFeaturedItems, getLeaderboardPreview } from "@/lib/mock-data";

export function HomeScreen() {
  const featured = getFeaturedItems();
  const leaderboard = getLeaderboardPreview();

  return (
    <div className="paper-page home-collage">
      <BoardHeader
        eyebrow="Like Board"
        title="轻轻点个赞"
        subtitle="内容入口、热度预览、钱包状态，都放在这块互动公告板里。"
        aside={<WalletButton />}
      />

      <section className="board-card detail-poster">
        <div className="tape" />
        <div className="hero-grid">
          <div className="mini-panel">
            <div className="headline-note">Quick Route</div>
            <h2 className="board-title" style={{ marginTop: 10 }}>
              去点赞
            </h2>
            <p className="board-subtitle" style={{ marginTop: 10 }}>
              浏览内容、打开详情、完成一次链上点赞。
            </p>
            <div className="badge-stack" style={{ marginTop: 14 }}>
              <Link className="sticker sticker-primary" href="/items">
                看内容
              </Link>
              <Link className="sticker sticker-blue" href="/leaderboard">
                看热门
              </Link>
              <Link className="sticker sticker-yellow" href="/likes">
                我的记录
              </Link>
            </div>
          </div>

          <div className="mini-panel">
            <div className="headline-note">Hot Note</div>
            <div className="ribbon-list" style={{ marginTop: 12 }}>
              {leaderboard.map((item, index) => (
                <Link key={item.id} className="ribbon-item" href={`/items/${item.id}`}>
                  <span>
                    #{index + 1} {item.title}
                  </span>
                  <strong>{item.mockLikes}</strong>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ActivityPanel />

      <section className="board-card section-pad">
        <div className="row-between" style={{ marginBottom: 14 }}>
          <div>
            <div className="headline-note">Featured Wall</div>
            <h2 style={{ margin: "8px 0 0", fontSize: "1.2rem" }}>现在就去点</h2>
          </div>
          <Link href="/items" className="sticker">
            全部内容
          </Link>
        </div>
        <ContentGrid items={featured} />
      </section>
    </div>
  );
}