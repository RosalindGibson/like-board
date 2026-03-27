import { pad, stringToHex } from "viem";

const STORAGE_KEY = "like-board-local";

type LocalState = Record<string, string[]>;

function readStorage(): LocalState {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as LocalState;
  } catch {
    return {};
  }
}

function writeStorage(value: LocalState) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function contentIdToBytes32(itemId: string) {
  return pad(stringToHex(itemId), { size: 32 });
}

export function getLocalLikeState(itemId: string, address?: string) {
  const state = readStorage();
  const ids = address ? state[address.toLowerCase()] ?? [] : [];

  return {
    likes: 0,
    hasLiked: ids.includes(itemId),
  };
}

export function markLocalLike(itemId: string, address: string) {
  const state = readStorage();
  const key = address.toLowerCase();
  const ids = new Set(state[key] ?? []);
  ids.add(itemId);
  state[key] = [...ids];
  writeStorage(state);
}

export function getMyLocalLikes(address?: string) {
  const state = readStorage();
  return address ? state[address.toLowerCase()] ?? [] : [];
}


