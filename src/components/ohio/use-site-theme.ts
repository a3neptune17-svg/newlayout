"use client";
import { useSyncExternalStore } from "react";
const key = "mrdetailer-theme";
type Theme = "dark" | "light";
let fallback: Theme = "dark";
function read(): Theme { try { const saved = localStorage.getItem(key); return saved === "light" ? "light" : saved === "dark" ? "dark" : fallback; } catch { return fallback; } }
function subscribe(update: () => void) { window.addEventListener("storage", update); window.addEventListener(key, update); return () => { window.removeEventListener("storage", update); window.removeEventListener(key, update); }; }
function setTheme(theme: Theme) { fallback = theme; try { localStorage.setItem(key, theme); } catch { /* Use in-memory preference when storage is unavailable. */ } window.dispatchEvent(new Event(key)); }
export function useSiteTheme() { return [useSyncExternalStore(subscribe, read, () => "dark" as Theme), setTheme] as const; }
