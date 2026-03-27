"use client";

import dynamic from "next/dynamic";

const LeaderboardScreen = dynamic(() => import("@/components/screens/LeaderboardScreen").then((mod) => mod.LeaderboardScreen), {
  ssr: false,
});

export default function LeaderboardPage() {
  return <LeaderboardScreen />;
}