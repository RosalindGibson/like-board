"use client";

import dynamic from "next/dynamic";

const LikesScreen = dynamic(() => import("@/components/screens/LikesScreen").then((mod) => mod.LikesScreen), {
  ssr: false,
});

export default function LikesPage() {
  return <LikesScreen />;
}