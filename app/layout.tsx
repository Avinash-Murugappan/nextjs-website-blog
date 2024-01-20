import AnalyticsWrapper from "components/analytics";
import Header from "components/Header";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { server } from "../config";
import "../styles/globals.css";
import ClientThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Avinash Murugappan - Full-Stack Developer",
    template: "%s - Avinash Murugappan",
  },
  description:
    "Avinash Murugappan, Welcome to my site! I’m a full-stack developer, who enjoys developing software, whether that be websites, applications, AI tech or anything in between. My goal is to always build products that provide pixel-perfect performant experiences. Also, I love chai!",
  generator: "Avinash Murugappan - Personal Website",
  applicationName: "Avinash Murugappan - Personal Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Avinash Arunachalam Arunachalachettiar Murugappan",
    "Avinash A A Murugappan",
    "Avinash A Murugappan",
    "Avinash Murugapan",
    "Avinash",
    "Avi",
    "Avinash Arunachalam",
  ],
  authors: [
    {
      name: "Avinash Murugappan",
      url: `${server}`,
    },
  ],
  themeColor: "#ffffff",
  colorScheme: "light",
  creator: "Avinash Murugappan",
  publisher: "Avinash Murugappan",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Avinash Murugappan - Senior Full Stack Developer ",
    description:
    "Avinash Murugappan, Welcome to my site! I’m a full-stack developer, who enjoys developing software, whether that be websites, applications, AI tech or anything in between. My goal is to always build products that provide pixel-perfect performant experiences. Also, I love chai!",
    url: `${server}`,
    siteName: "Avinash Murugappan - Senior Full Stack Developer",
    images: [
      {
        url: `${server}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Avinash Murugappan - Senior Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": 0,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      new URL("/favicon.ico", server).href,
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: `./site.webmanifest/`,
  twitter: {
    card: "summary_large_image",
    site: "@avinash___27",
    title: "Avinash Murugappan - Senior Full Stack Developer",
    description:
    "Avinash Murugappan, Welcome to my site! I’m a full-stack developer, who enjoys developing software, whether that be websites, applications, AI tech or anything in between. My goal is to always build products that provide pixel-perfect performant experiences. Also, I love chai!",
    creator: "@avinash___27",
    images: [
      {
        url: `${server}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Avinash Murugappan - Senior Full Stack Developer",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification=0",
    bing: "msvalidate.01=0",
    yandex: "yandex-verification=0",
  },

  alternates: {
    canonical: `${server}`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full antialiased" lang="en">
      <head />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen">
        <ClientThemeProvider>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-black dark:ring-black" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <AnalyticsWrapper />
            <Footer />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
