import SimpleLayout from "components/SimpleLayout";
import ResourcesPlaceholder from "components/skeleton/ResourcesPlaceholder";
import { server } from "config";
import type { Metadata } from "next";
import { Suspense } from "react";
import ListResources from "./ListResources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "These materials have been tremendously beneficial to me in my learning path. I hope you find these helpful as well!",
  openGraph: {
    title: "Resources - Avinash Murugappan",
    description:
      "These materials have been tremendously beneficial to me in my learning path. I hope you find these helpful as well!",
    url: `${server}/resources`,
    type: "website",
    site_name: "Avinash Murugappan - Senior Full-Stack Developer",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Avinash Murugappan",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@avinash__27",
    creator: "@avinash__27",
    title: "Resources - Avinash Murugappan",
    description:
      "These materials have been tremendously beneficial to me in my learning path. I hope you find these helpful as well!",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Avinash Murugappan",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: `${server}/resources`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function Resources(): JSX.Element {
  return (
    <SimpleLayout
      title="Some excellent resources worth sharing"
      intro="These materials have been tremendously beneficial to me in my learning path. I hope you find these helpful as well!"
    >
      <div className="mt-16 sm:mt-20">
        <Suspense fallback={<ResourcesPlaceholder />}>
          {/* @ts-expect-error Server Component */}
          <ListResources />
        </Suspense>
      </div>
    </SimpleLayout>
  );
}
