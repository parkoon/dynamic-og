import { Metadata } from "next";

export async function generateMetadata({ params }: { params: {} }) {
  console.log(params);
  return {
    metadataBase: new URL("https://dynamic-og-ruby.vercel.app"),
    title: "title",
    description: "description",
    keywords: ["k", "e", "y", "w", "o", "r", "d", "s"],
    creator: "user name",
    authors: [
      {
        name: "user name",
        url: "page url",
      },
    ],
  } as Metadata;
}

export default async function DataIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
