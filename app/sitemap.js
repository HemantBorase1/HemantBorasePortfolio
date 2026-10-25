import { projectsData } from "@/data/projects";

export const dynamic = "force-static";

/**
 * Static sitemap generator for SEO indexing across home and case study routes.
 */
export default function sitemap() {
  const baseUrl = "https://hemantborase.dev";
  const currentDate = new Date().toISOString();

  // Project slug routes
  const projectEntries = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectEntries,
  ];
}
