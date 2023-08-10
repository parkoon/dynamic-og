import React from "react";
import { Metadata, ResolvingMetadata } from "next";

const Page = () => {
  return <div>Dynamic Metadata test page</div>;
};

export default Page;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log("...");
  // read route params
  const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  console.log("🚀 ~ file: page.tsx:76 ~ previousImages:", previousImages);

  return {
    title: "이력서",
    metadataBase: new URL("https://dynamic-og-ruby.vercel.app"),
    description: "김현석입니다.",
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}
