export const SITE_URL = "https://www.impova.de";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
};

type PageOpenGraphInput = {
  title: string;
  description: string;
  path: string;
  /** Defaults to the branded fallback OG image; pass a project screenshot for case studies. */
  image?: string;
};

/**
 * Next.js merges `openGraph`/`twitter` per route segment by full
 * replacement, not deep merge — a page that only sets `title`/`description`
 * silently inherits the root layout's homepage OG data (wrong url, wrong
 * preview text when shared). This rebuilds the full block per page instead.
 */
export function pageOpenGraph({ title, description, path, image }: PageOpenGraphInput) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image ?? OG_IMAGE.url;
  return {
    openGraph: {
      type: "website" as const,
      locale: "de_DE",
      siteName: "Impova",
      url,
      title,
      description,
      images: [{ url: imageUrl, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [imageUrl],
    },
  };
}
