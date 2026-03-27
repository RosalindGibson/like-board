type LikeButtonProps = {
  disabled: boolean;
  pending: boolean;
  onLike: () => void;
  helperText?: string;
};

export function LikeButton({ disabled, pending, onLike, helperText }: LikeButtonProps) {
  return (
    <div>
      <button className="like-button" onClick={onLike} disabled={disabled || pending}>
        {pending ? "点赞发送中..." : disabled ? "已经点过赞啦" : "给这条内容点赞"}
      </button>
      {helperText ? (
        <div className="small" style={{ marginTop: 10 }}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
}


