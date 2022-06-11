import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  children: React.ReactNode;
}

export const SEOLayout: FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="og:description" content={props.description} />
        <meta name="og:image" content={props.imageUrl} />
      </Head>
      <nav className="w-screen h-14 border shadow-sm flex items-center bg-gray-50">
        <Link href="/" passHref>
          <span className="text-blue-400 text-2xl font-bold px-4">Anime</span>
        </Link>
      </nav>
      <section className="p-4">{props.children}</section>
    </div>
  );
};
