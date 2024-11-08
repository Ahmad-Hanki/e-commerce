import prisma from "@/lib/db";
import type { MetadataRoute } from "next";
const weeklyFrequency = "weekly" as const; // Declare as a constant

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic product pages
  const dynamicProducts = await fetchProductPaths();
  const categories = getCategoryPaths();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://acme.com", // main page
      lastModified: new Date(),
      changeFrequency: "monthly", // Ensured this matches the allowed literals
      priority: 1,
    },
    {
      url: "https://acme.com/about", // about page
      lastModified: new Date(),
      changeFrequency: "yearly", // Ensured this matches the allowed literals
      priority: 0.7,
    },
    {
      url: "https://acme.com/contact", // contact page
      lastModified: new Date(),
      changeFrequency: "weekly", // Ensured this matches the allowed literals
      priority: 0.6,
    },
    {
      url: "https://acme.com/api/auth/login", // login page
      lastModified: new Date(),
      changeFrequency: "yearly", // Ensured this matches the allowed literals
      priority: 0.5,
    },
  ];

  // Combine static and dynamic pages and return the final sitemap
  return [...staticPages, ...dynamicProducts, ...categories];
}

// Fetch product paths and return them for sitemap
async function fetchProductPaths() {
  const products = await prisma.product.findMany();

  return products.map((product) => ({
    url: `https://acme.com/products/${product.id}`,
    lastModified: product.updatedAt, // Ensure this is a Date or a string that is valid
    changeFrequency: weeklyFrequency, // Explicitly declare the literal type
    priority: 0.9,
  }));
}
// Fetch product paths and return them for sitemap
function getCategoryPaths() {
  const category = [
    {
      name: "Kozmetik",
      id: 1,
    },
    {
      name: "Elektronik",
      id: 2,
    },
    {
      name: "KisiselBakim",
      id: 3,
    },
  ];

  return category.map((cat) => ({
    url: `https://acme.com/${cat.name}`,
    changeFrequency: weeklyFrequency, // Explicitly declare the literal type
    priority: 0.8,
  }));
}
