// The schema.org records a search engine reads (JSON-LD). `Layout.astro`
// puts the organization on every page and whatever a page passes as
// `schema`; the records themselves live here so a fact — the demo's title,
// the store link — has one home.
import { SITE } from "./consts";

const publisher = {
  "@type": "Organization",
  name: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/evoquake_logo.svg`,
};

/** Who runs this site, on every page. */
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/evoquake_logo.svg`,
  email: SITE.email,
  sameAs: [SITE.youtube, SITE.playStore, SITE.kuyunUrl],
};

/** The product: a free web app, also in the Play Store. */
export const kuyunApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kuyun AI",
  alternateName: "Kuyun",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web, Android",
  url: SITE.kuyunUrl,
  installUrl: SITE.playStore,
  description: SITE.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher,
};

/** The one-minute demo on YouTube (the title is the video's own). */
export const demoVideo = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Run Python, speak Spanish, hear the classics, get the flight deal — one free app, every day",
  description:
    "A one-minute look at Kuyun AI: a Python lesson run in the page, a Spanish line said back and judged, a classic read aloud, and a morning briefing with a flight deal.",
  thumbnailUrl: [`https://i.ytimg.com/vi/${SITE.kuyunDemoId}/hqdefault.jpg`],
  uploadDate: SITE.kuyunDemoDate,
  duration: "PT1M",
  contentUrl: SITE.kuyunDemo,
  embedUrl: `https://www.youtube.com/embed/${SITE.kuyunDemoId}`,
  publisher,
};

/** One blog post, by its frontmatter. */
export function blogPosting(post: {
  id: string;
  data: { title: string; description: string; pubDate: Date; author: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.pubDate.toISOString().slice(0, 10),
    author: { "@type": "Person", name: post.data.author },
    publisher,
    mainEntityOfPage: `${SITE.url}/blog/${post.id}`,
  };
}
