import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import FreelanceProjects from "@/components/sections/FreelanceProjects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { siteConfig, siteUrl } from "@/data/site";

/** JSON-LD Person schema for Google rich results and Knowledge Graph. */
function PersonStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Software Developer",
    url: siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.socialLinks.github,
      siteConfig.socialLinks.linkedin,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dr. D. Y. Patil Pratishthan's College of Engineering, Pune",
    },
    knowsAbout: [
      "Java",
      "JavaScript",
      "Next.js",
      "React",
      "Node.js",
      "Supabase",
      "SQL",
      "Full Stack Development",
      "RESTful APIs",
      "Artificial Intelligence",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <PersonStructuredData />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FreelanceProjects />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}
