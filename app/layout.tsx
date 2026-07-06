import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";
import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { NekoCat } from "@/components/neko-cat";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Sumedh Vats - Backend & Infra Engineer | Portfolio",
  description:
    "Backend and infra first engineer writing Go and Node. I care about latency, correctness, and systems that scale without drama. I also write CLIs.",
  keywords: [
    "Backend Engineer",
    "Go Developer",
    "Golang Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Infrastructure Engineer",
    "Systems Engineer",
    "Software Engineer",
    "CLI Developer",
    "Portfolio",
    "India",
    "Sumedh Vats",
    "Open Source",
    "CNCF",
    "Rate Limiter",
    "pasteCTL",
    "Chandigarh University",
    "Best Portfolio",
    "Minimalist Portfolio",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Sumedh Vats" }],
  creator: "Sumedh Vats",
  publisher: "Sumedh Vats",
  generator: "Next.js",
  applicationName: "Sumedh Vats Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumedhvats.vercel.app",
    siteName: "Sumedh Vats Portfolio",
    title: "Sumedh Vats - Backend & Infra Engineer",
    description:
      "Backend and infra first engineer writing Go and Node. I care about latency, correctness, and systems that scale without drama. I also write CLIs.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumedh Vats - Backend & Infra Engineer",
    description:
      "Backend and infra first engineer writing Go and Node. I care about latency, correctness, and systems that scale without drama. I also write CLIs.",
  },
  icons: {
    icon: "/favicon?v=1",
    shortcut: "/favicon?v=1",
    apple: "/favicon?v=1",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "sumedhvats2004@gmail.com",
    "contact:phone_number": "+91-8920458448",
    "contact:country_name": "India",
    "contact:region": "Mohali",
    "contact:locality": "Mohali",
    "og:site_name": "Sumedh Vats Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": "https://sumedhvats.vercel.app",
    "og:title": "Sumedh Vats - Backend & Infra Engineer",
    "og:description":
      "Backend and infra first engineer writing Go and Node. I care about latency, correctness, and systems that scale without drama. I also write CLIs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisSmoothScroll />
            <NekoCat />
            <div className="min-h-dvh">
              {children}
            </div>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
