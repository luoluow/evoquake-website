// Central place for site-wide content so copy lives in one spot.
export const SITE = {
  name: "EvoQuake",
  legalName: "EvoQuake CO.",
  email: "luo@evoquake.com",
  tagline: "AI & agentic infrastructure to empower everyday life.",
  description:
    "EvoQuake builds AI and agentic infrastructure that puts capable, trustworthy agents to work in people's daily lives.",
  url: "https://evoquake.com",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
