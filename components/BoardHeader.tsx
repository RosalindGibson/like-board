import type { ReactNode } from "react";

type BoardHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  aside?: ReactNode;
};

export function BoardHeader({ eyebrow, title, subtitle, aside }: BoardHeaderProps) {
  return (
    <header className="board-card section-pad">
      <div className="row-between" style={{ alignItems: "flex-start" }}>
        <div>
          <div className="headline-note">{eyebrow}</div>
          <h1 className="board-title" style={{ marginTop: 10 }}>
            {title}
          </h1>
          <p className="board-subtitle" style={{ marginTop: 10 }}>
            {subtitle}
          </p>
        </div>
        {aside}
      </div>
    </header>
  );
}


