// The sitemap, built with the site: every page and every published post.
// `public/robots.txt` names it; Google Search Console and Bing Webmaster
// Tools are given its address by hand. No integration: six pages and the
// posts are a short list, and the addresses must match `Layout.astro`'s
// canonical ones.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../consts";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const pages = ["/", "/product/", "/works/", "/about/", "/blog/", "/contact/"];
  const rows = [
    ...pages.map((path) => `<url><loc>${SITE.url}${path}</loc></url>`),
    ...posts.map(
      (post) =>
        `<url><loc>${SITE.url}/blog/${post.id}/</loc>` +
        `<lastmod>${post.data.pubDate.toISOString().slice(0, 10)}</lastmod></url>`,
    ),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    rows.join("\n") +
    "\n</urlset>\n";
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
