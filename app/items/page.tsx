"use client";

import dynamic from "next/dynamic";

const ItemsScreen = dynamic(() => import("@/components/screens/ItemsScreen").then((mod) => mod.ItemsScreen), {
  ssr: false,
});

export default function ItemsPage() {
  return <ItemsScreen />;
}