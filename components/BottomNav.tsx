"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "首页", icon: "●" },
  { href: "/items", label: "内容", icon: "?" },
  { href: "/leaderboard", label: "热门", icon: "★" },
  { href: "/likes", label: "我的", icon: "?" },
  { href: "/about", label: "规则", icon: "?" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav-grid">
        {links.map((link) => {
          const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href} className={clsx("bottom-link", active && "active")}>
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


