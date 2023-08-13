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
