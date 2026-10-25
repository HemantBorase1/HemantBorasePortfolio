import "./globals.css";
import { siteConfig } from "@/data/site";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/interactive/ScrollProgress";
import CustomCursor from "@/components/interactive/CustomCursor";
import ParticlesBackground from "@/components/interactive/ParticlesBackground";

export const metadata = {
  metadataBase: new URL("https://hemantborase.dev"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Hemant Borase",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Pune",
    "Freelance Software Engineer",
  ],
  authors: [{ name: siteConfig.name, url: "https://hemantborase.dev" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemantborase.dev",
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.tagline,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.tagline,
    creator: "@hemantborase",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased"
        suppressHydrationWarning
      >
        <Providers>
          {/* pointer-events-none overlays — never block user interaction */}
          <CustomCursor />
          {/* z-50: sits above sticky navbar (z-40) */}
          <ScrollProgress />
          {/* z-0: decorative canvas behind all content */}
          <ParticlesBackground />

          {/* z-40: sticky header */}
          <Navbar />

          {/* z-10: page content sits above particles canvas (z-0) */}
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
