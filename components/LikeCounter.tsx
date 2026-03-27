type LikeCounterProps = {
  count: number;
  label?: string;
  size?: "normal" | "large";
};

export function LikeCounter({ count, label = "点赞", size = "normal" }: LikeCounterProps) {
  return (
    <div className="like-counter" aria-label={`${count} ${label}`}>
      <strong style={{ fontSize: size === "large" ? "3rem" : undefined }}>{count}</strong>
      <span>{label}</span>
    </div>
  );
}


