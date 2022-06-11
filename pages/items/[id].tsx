import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { SEOLayout } from "../../components/layout";
import animeServices from "../../services/animeServices";
import { Item } from "../../core/types/item";
import DetailSkeleton from "../../components/skeletons/DetailSkeleton";
import { useRouter } from "next/router";

interface Props {
  anime: Item;
  loading: boolean;
}

const ItemById: NextPage<Props> = ({ anime, loading }) => {
  const [showMoreSynopsis, setShowMoreSynopsis] = useState<boolean>(false);

  return (
    <SEOLayout
      title={anime?.title ?? "Loading..."}
      description={anime?.background ?? "Loading synopsis..."}
      imageUrl={anime?.images.jpg.large_image_url}
    >
      <div className="perfect_center flex justify-center items-center">
        {anime ? (
          <div className="flex mx-auto max-w-2xl flex-col md:flex-row items-center space-y-5 md:space-x-10 border border-gray-400 rounded-lg px-4 py-6 shadow-xl bg-gray-50">
            <picture>
              <Image
                className="max-h-72 md:max-h-96"
                src={anime.images.jpg.large_image_url}
                alt={`Poster ${anime.title}`}
                width={260}
                height={400}
              />
            </picture>
            <div className="max-w-lg space-y-4">
              <div className="space-y-2">
                <h1 className="font-bold text-xl">{anime.title}</h1>
                <div className="flex flex-row items-center space-x-1">
                  <FaStar color="orange" />
                  <p>{anime.score}</p>
                </div>
              </div>
              <div>
                <h2 className={`${!showMoreSynopsis && "synopsis__truncate"}`}>
                  {anime.synopsis}
                </h2>
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => setShowMoreSynopsis(!showMoreSynopsis)}
                >
                  {showMoreSynopsis ? "Show less" : "Show more"}
                </span>
              </div>
              <ul className="grid grid-cols-2">
                <li>
                  <strong>Year: </strong>
                  {anime.year}
                </li>
                <li>
                  <strong>Duration :</strong>
                  {anime.duration}
                </li>
                <li>
                  <strong>Episodes: </strong>
                  {anime.episodes}
                </li>
                <li>
                  <strong>Rating: </strong> {anime.rating}
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        {loading ? <DetailSkeleton /> : null}
      </div>
    </SEOLayout>
  );
};

export default ItemById;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const animes = [...Array(200)].map((value, index) => `${index + 1}`);

  return {
    paths: animes.map((id) => ({
      params: { id },
    })),
    // fallback: false
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  var loading: boolean = true;
  const { id } = params as { id: string };

  const anime: any = await animeServices.getAnimeById(id);
  loading = false;

  console.log('anime :>> ', anime);

  if (!anime) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      anime: anime.data,
      loading,
    },
    revalidate: 86400, // 60 * 60 * 24,
  };
};
