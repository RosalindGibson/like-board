"use client";

import dynamic from "next/dynamic";

const HomeScreen = dynamic(() => import("@/components/screens/HomeScreen").then((mod) => mod.HomeScreen), {
  ssr: false,
});

export default function HomePage() {
  return <HomeScreen />;
}