import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RebuildPage } from "@/components/ohio/rebuild-page";
import "./ohio-site.css";
import "./ohio-site-refinement.css";
import "@/components/ohio/client-refinements.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--or-font" });

export const metadata: Metadata = {
  title: "MR. DETAILER — Automotive Detailing & Protection",
  description:
    "Explore MR. DETAILER paint protection, detailing, coatings, NameX products, and studio services.",
};

export default function HomePage() {
  return <div className={`ohio-client-preview ${inter.variable}`}><RebuildPage previewOne /></div>;
}
