import { ContentCard } from "@/components/ContentCard";
import { ContentItem } from "@/lib/mock-data";

export function ContentGrid({ items }: { items: ContentItem[] }) {
  return (
    <div className="content-grid">
      {items.map((item, index) => (
        <ContentCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}


