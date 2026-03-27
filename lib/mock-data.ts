export type ContentItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  mood: string;
  mockLikes: number;
  cardColor: string;
};

const items: ContentItem[] = [
  {
    id: "coffee-memo",
    title: "今日咖啡口味投票",
    description: "在便利贴里留一个偏好，看看哪杯最受欢迎。",
    category: "Daily",
    mood: "soft mood",
    mockLikes: 21,
    cardColor: "#fff7ee",
  },
  {
    id: "late-night-mix",
    title: "深夜歌单交换",
    description: "给今晚循环播放的一条内容点个赞。",
    category: "Music",
    mood: "night loop",
    mockLikes: 34,
    cardColor: "#eef7ff",
  },
  {
    id: "weekend-route",
    title: "周末散步路线",
    description: "一张轻旅行海报，选你最想去的一条线。",
    category: "Travel",
    mood: "small trip",
    mockLikes: 18,
    cardColor: "#f3fff0",
  },
  {
    id: "lunch-board",
    title: "午餐灵感板",
    description: "从便签墙里挑一条最想吃的菜单。",
    category: "Food",
    mood: "fresh bite",
    mockLikes: 29,
    cardColor: "#fff5db",
  },
  {
    id: "tiny-desk",
    title: "桌面整理挑战",
    description: "给你最喜欢的整理技巧点一个轻轻的赞。",
    category: "Life",
    mood: "clean reset",
    mockLikes: 12,
    cardColor: "#f8f3ff",
  },
  {
    id: "frame-sketch",
    title: "相框草图征集",
    description: "从板上挑一张你想贴进相册的草图。",
    category: "Art",
    mood: "paper sketch",
    mockLikes: 41,
    cardColor: "#fff1f1",
  },
];

export function getItems() {
  return items;
}

export function getItemById(id: string) {
  return items.find((item) => item.id === id);
}

export function getFeaturedItems() {
  return items.slice(0, 4);
}

export function getLeaderboardPreview() {
  return [...items].sort((a, b) => b.mockLikes - a.mockLikes).slice(0, 3);
}


