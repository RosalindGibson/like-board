import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "@/components/providers";
import { BottomNav } from "@/components/BottomNav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="base:app_id" content="69c626892f29a15e2b91ed09" />
        <meta
          name="talentapp:project_verification"
          content="21f8ae33c6456ba044f6c12b3db51903035c20d87adf449681c610ad831589d66121b921e1fbe308dd7945169de54ed14edbe25b6a208e2d38e31a4bcbb7c904"
        />
      </head>
      <body>
        <Providers>
          <div className="app-shell">{children}</div>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}


