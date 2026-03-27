"use client";

import dynamic from "next/dynamic";

const ItemDetailScreen = dynamic(() => import("@/components/screens/ItemDetailScreen").then((mod) => mod.ItemDetailScreen), {
  ssr: false,
});

export default function ItemDetailPage() {
  return <ItemDetailScreen />;
}