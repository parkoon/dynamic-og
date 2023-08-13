import { Metadata } from "next";

export async function generateMetadata({ params }: { params: {} }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return {
    metadataBase: new URL("https://dynamic-og-ruby.vercel.app"),
    title: data.title,
    description: data.body,
    keywords: data.title.split(" "),
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
