import { MetadataRoute } from "next";
import { categories } from "@/data/productCategory";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL: string = "https://www.k-floors.com";
  const productURLs = categories.map((p) => ({
    url: `${baseURL}/product/${p.index}`,
    lastModified: new Date(),
  }));
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/product`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/catalogue`,
      lastModified: new Date(),
    },
    ...productURLs,
  ];
}
