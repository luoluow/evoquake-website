// Central place for site-wide content so copy lives in one spot.
export const SITE = {
  name: "EvoQuake",
  legalName: "EvoQuake CO.",
  email: "luo@evoquake.com",
  tagline: "Frontier AI for everyone — Kuyun AI, by EvoQuake.",
  description:
    "EvoQuake builds Kuyun AI: a personal AI that makes courses with a study partner, books read aloud, libraries with a librarian and morning briefings — works while you are away, shows its work, and has a free allowance every day.",
  url: "https://evoquake.com",
  /** the product, where people use it */
  kuyunUrl: "https://kuyun.evoquake.com/",
  kuyunSignup: "https://kuyun.evoquake.com/app/#/signup",
  /** the one-minute demo the app serves to anyone (kuyun-agent PR #1169) */
  kuyunDemo: "https://kuyun.evoquake.com/app/kuyun-demo-20261104.mp4",
  /**
   * Google Analytics 4 measurement ID, "G-XXXXXXXXXX" (analytics.google.com →
   * Admin → Data streams). Public by design — it ships in every page's HTML.
   * Empty = no tracking script.
   */
  gaMeasurementId: "G-MFB1F1XBY0" as string,
} as const;

export const KUYUN = {
  name: "Kuyun",
  url: "https://kuyun.evoquake.com/",
  appUrl: "https://kuyun.evoquake.com/app/",
  status: "Private beta",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Kuyun" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
