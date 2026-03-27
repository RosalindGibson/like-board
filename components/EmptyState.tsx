import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
};

export function EmptyState({ title, description, actionLabel, href }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="headline-note">Empty</div>
      <h3 style={{ margin: "10px 0 8px" }}>{title}</h3>
      <p className="board-subtitle" style={{ marginBottom: 16 }}>
        {description}
      </p>
      <Link href={href} className="sticker sticker-primary">
        {actionLabel}
      </Link>
    </div>
  );
}


