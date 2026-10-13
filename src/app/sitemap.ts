import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "./referenzen/case-studies";

const SITE = "https://www.impova.de";

// Fallback, falls beim Build keine Git-Historie verfügbar ist (z. B. flacher Klon).
const FALLBACK_DATE = new Date("2026-10-11");

const HOME_FILES = [
  "src/app/page.tsx",
  "src/components/Hero.tsx",
  "src/components/Problem.tsx",
  "src/components/VisibilityCheck.tsx",
  "src/components/Work.tsx",
  "src/components/Testimonials.tsx",
  "src/components/Philosophy.tsx",
  "src/components/Services.tsx",
  "src/components/Commitments.tsx",
  "src/components/Pipeline.tsx",
  "src/components/FAQ.tsx",
  "src/components/ContactForm.tsx",
];

// Datum der letzten Änderung laut Git, über alle Dateien, aus denen die Seite besteht.
function lastModified(files: string[]): Date {
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return iso ? new Date(iso) : FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

const caseFiles = ["src/app/referenzen/case-studies.ts", "src/app/referenzen/[slug]/page.tsx"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; files: string[]; priority: number }[] = [
    { path: "", files: HOME_FILES, priority: 1 },
    { path: "/webdesign", files: ["src/app/webdesign/page.tsx"], priority: 0.8 },
    { path: "/website-relaunch", files: ["src/app/website-relaunch/page.tsx"], priority: 0.8 },
    { path: "/anzeigen", files: ["src/app/anzeigen/page.tsx"], priority: 0.5 },
    { path: "/recruiting", files: ["src/app/recruiting/page.tsx"], priority: 0.7 },
    { path: "/standorte/landshut", files: ["src/app/standorte/landshut/page.tsx"], priority: 0.8 },
    { path: "/referenzen", files: ["src/app/referenzen/page.tsx", ...caseFiles], priority: 0.7 },
    { path: "/branchen/handwerker", files: ["src/app/branchen/handwerker/page.tsx"], priority: 0.7 },
    { path: "/branchen/dienstleister", files: ["src/app/branchen/dienstleister/page.tsx"], priority: 0.7 },
    { path: "/ueber-mich", files: ["src/app/ueber-mich/page.tsx"], priority: 0.6 },
    ...CASE_STUDIES.map((c) => ({
      path: `/referenzen/${c.slug}`,
      files: caseFiles,
      priority: 0.6,
    })),
  ];

  return pages.map(({ path, files, priority }) => ({
    url: `${SITE}${path}`,
    lastModified: lastModified(files),
    changeFrequency: "monthly",
    priority,
  }));
}
