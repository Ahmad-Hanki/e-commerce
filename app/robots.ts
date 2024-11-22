import type { MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/dashboard/*", "/cart", '/createUser', '/checkoutForm' , '/search'], // Disallow `/dashboard` and everything under it
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
