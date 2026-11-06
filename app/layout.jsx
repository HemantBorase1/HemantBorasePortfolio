import "./globals.css";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { siteConfig, siteUrl } from "@/data/site";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/interactive/ScrollProgress";
import CustomCursor from "@/components/interactive/CustomCursor";
import ParticlesBackground from "@/components/interactive/ParticlesBackground";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Hemant Borase | Software Developer & Freelancer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Full stack developer specialising in Next.js, Node.js and Supabase. I build scalable, AI-integrated web apps — available for freelance contracts and full-time roles.",
  keywords: [
    "Hemant Borase",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Supabase Developer",
    "Web Developer Pune",
    "Freelance Software Developer",
    "React Developer",
    "Java Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    title: `Hemant Borase | Software Developer & Freelancer`,
    description:
      "Full stack developer specialising in Next.js, Node.js and Supabase. I build scalable, AI-integrated web apps — available for freelance contracts and full-time roles.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – Full Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Hemant Borase | Software Developer & Freelancer`,
    description:
      "Full stack developer specialising in Next.js, Node.js and Supabase. I build scalable, AI-integrated web apps — available for freelance contracts and full-time roles.",
    creator: "@hemantborase",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: {
    // Set NEXT_PUBLIC_GOOGLE_VERIFICATION in your environment to activate GSC ownership verification.
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${sourceSerif4.variable} font-sans min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased`}
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
