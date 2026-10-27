/**
 * Portfolio project showcases and detailed case studies.
 */
export const projectsData = [
  {
    slug: "agriconnect",
    title: "AgriConnect",
    shortDescription:
      "A full-stack agriculture platform with an AI assistant (KisanGPT) offering crop guidance, organic farming support, and market access for farmers.",
    problem:
      "Farmers struggle to get crop guidance, organic farming support, and direct market access in one place.",
    role: "Full-stack developer",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn", "Node.js", "Supabase", "AI KisanGPT", "ML"],
    features: [
      "Role-based access control for farmers, vendors, and admins",
      "RESTful APIs with JWT authentication",
      "Row-level security for secure, scalable operations",
      "AI-powered KisanGPT giving personalized crop guidance using weather, soil, and location-based data",
    ],
    result:
      "An integrated platform serving farmers, vendors, and admins with secure and scalable operations.",
    image: "/images/projects/agriconnect.png",
    // TODO: Replace "#" with the live URL for AgriConnect
    liveUrl: "#",
    // TODO: Replace "#" with the GitHub URL for AgriConnect
    githubUrl: "#",
  },
  {
    slug: "annadan",
    title: "Annadan",
    shortDescription:
      "A social-impact web app that connects food donors with people in need to reduce food wastage and hunger.",
    problem:
      "Surplus food is wasted while people go hungry, and there is no centralized way to connect donors with those in need.",
    role: "Full-stack developer",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn", "Node.js", "Supabase", "Gemini 3 Flash"],
    features: [
      "Streamlined food donation workflow",
      "RESTful APIs with authentication and email verification",
      "Responsive UI",
      "AI-driven features for intelligent food utilization and automated recipe generation",
    ],
    result: "A centralized food-sharing platform that streamlines donation workflows.",
    image: "/images/projects/annadan.png",
    // TODO: Replace "#" with the live URL for Annadan
    liveUrl: "#",
    // TODO: Replace "#" with the GitHub URL for Annadan
    githubUrl: "#",
  },
];
