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
  /** the one-minute demo, on YouTube — the app stopped serving the file
   *  (kuyun-agent 20261105-the-demo-is-on-youtube); the site linked a 404
   *  until 2026-11-08 */
  kuyunDemo: "https://youtube.com/shorts/Uav0-QKXbRs",
  kuyunDemoId: "Uav0-QKXbRs",
  kuyunDemoDate: "2026-11-05",
  /** the works people published, each a page anyone can read (kuyun-agent #1214) */
  kuyunWorks: "https://kuyun.evoquake.com/p",
  /** the same list as JSON, which /works is built from */
  kuyunCatalogue: "https://kuyun.evoquake.com/public/projects",
  /** Kuyun's handbook, readable without signing in */
  kuyunHelp: "https://kuyun.evoquake.com/help",
  playStore: "https://play.google.com/store/apps/details?id=com.evoquake.kuyun",
  youtube: "https://www.youtube.com/@evoquake-co",
  /**
   * Google Analytics 4 measurement ID, "G-XXXXXXXXXX" (analytics.google.com →
   * Admin → Data streams). Public by design — it ships in every page's HTML.
   * Empty = no tracking script.
   */
  gaMeasurementId: "G-MFB1F1XBY0" as string,
} as const;

/** A collection on Kuyun's works page — the works one of Explore's topics
 *  answers, as a page anyone can read (kuyun-agent explore_chips.yaml). */
export const kuyunCollection = (page: string) => `${SITE.kuyunWorks}/in/${page}`;

/** The collections with works in them on 2026-11-08, as Kuyun names them. An
 *  empty collection answers 404 there, so a new topic is added here once it
 *  has works. */
export const COLLECTIONS = [
  { page: "learn-a-language", label: "Learn a language" },
  { page: "read-aloud", label: "Read aloud" },
  { page: "books", label: "Books" },
  { page: "courses", label: "Courses" },
  { page: "papers", label: "Papers" },
  { page: "libraries", label: "Libraries" },
  { page: "for-children", label: "For children" },
  { page: "science", label: "Science" },
  { page: "ai-and-machine-learning", label: "AI & machine learning" },
  { page: "philosophy", label: "Philosophy" },
  { page: "mystery", label: "Mystery" },
  { page: "adventure", label: "Adventure" },
  { page: "gothic-and-horror", label: "Gothic & horror" },
  { page: "poetry", label: "Poetry" },
  { page: "kitchen-and-home", label: "Kitchen & home" },
  { page: "in-chinese", label: "中文" },
  { page: "in-spanish", label: "En español" },
] as const;

export const KUYUN = {
  name: "Kuyun",
  url: "https://kuyun.evoquake.com/",
  appUrl: "https://kuyun.evoquake.com/app/",
  status: "Beta", // open to sign up since 2026-11-03
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Kuyun" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
