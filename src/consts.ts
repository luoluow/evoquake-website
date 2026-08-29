// Central place for site-wide content so copy lives in one spot.
export const SITE = {
  name: "EvoQuake",
  legalName: "EvoQuake CO.",
  email: "luo@evoquake.com",
  tagline: "Frontier AI for everyone.",
  description:
    "EvoQuake makes Kuyun — a personal AI assistant that remembers you, explains itself, and puts you in control of what it knows.",
  url: "https://evoquake.com",
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
