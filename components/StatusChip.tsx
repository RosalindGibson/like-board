export function StatusChip({ liked }: { liked: boolean }) {
  return (
    <span
      className="status-chip"
      style={{
        color: liked ? "#256f44" : "#8a5b00",
        background: liked ? "rgba(123, 211, 137, 0.18)" : "rgba(255, 209, 102, 0.18)",
      }}
    >
      <span className="status-dot" />
      {liked ? "已点赞" : "未点赞"}
    </span>
  );
}


