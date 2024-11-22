import prisma from "@/lib/db";
import type { MetadataRoute } from "next";
const weeklyFrequency = "weekly" as const; // Declare as a constant
const yearlyFrequency = "yearly" as const; // Declare as a constant

const baseUrl = process.env.BASE_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic product pages
  const dynamicProducts = await fetchProductPaths();
  const dynamicCategories = await fetchCategoryPaths();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // main page
      lastModified: "2024-11-10",
      changeFrequency: "monthly", // Ensured this matches the allowed literals
      priority: 1,
    },
    {
      url: `${baseUrl}/product`, // main page
      lastModified: "2024-11-10",
      changeFrequency: "monthly", // Ensured this matches the allowed literals
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`, // about page
      lastModified: "2024-11-10",
      changeFrequency: "yearly", // Ensured this matches the allowed literals
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`, // contact page
      lastModified: "2024-11-10",
      changeFrequency: "weekly", // Ensured this matches the allowed literals
      priority: 0.5,
    },
    {
      url: `${baseUrl}/api/auth/login`, // login page
      lastModified: "2024-11-10",
      changeFrequency: "yearly", // Ensured this matches the allowed literals
      priority: 0.4,
    },
  ];

  // Combine static and dynamic pages and return the final sitemap
  return [...staticPages, ...dynamicProducts, ...dynamicCategories];
}

// Fetch product paths and return them for sitemap
async function fetchProductPaths() {
  const products = await prisma.product.findMany();

  return products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: product.createdAt,
    changeFrequency: weeklyFrequency,
    priority: 0.8,
  }));
}

async function fetchCategoryPaths() {
  const categories = await prisma.upperCategory.findMany();

  return categories.map((category) => ({
    url: `${baseUrl}/category/${category.id}`,
    changeFrequency: yearlyFrequency,
    lastModified: "2024-11-10",
    priority: 0.7,
  }));
}
