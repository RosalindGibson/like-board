import { BoardHeader } from "@/components/BoardHeader";

export default function AboutPage() {
  return (
    <div className="paper-page">
      <BoardHeader
        eyebrow="Rules"
        title="使用说明"
        subtitle="规则很简单，文案也尽量短。"
      />

      <section className="board-card section-pad">
        <div className="ribbon-list">
          <div className="ribbon-item">
            <span>每个钱包地址</span>
            <strong>每个内容只能点赞一次</strong>
          </div>
          <div className="ribbon-item">
            <span>内容详情页</span>
            <strong>独立路由可直接访问</strong>
          </div>
          <div className="ribbon-item">
            <span>合约地址</span>
            <strong>0x9ecd...92f6b</strong>
          </div>
          <div className="ribbon-item">
            <span>数据来源</span>
            <strong>链上读取 + mock 内容板</strong>
          </div>
        </div>
      </section>
    </div>
  );
}


