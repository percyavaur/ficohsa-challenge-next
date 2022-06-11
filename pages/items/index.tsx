import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaSadTear, FaStar } from "react-icons/fa";
import { SEOLayout } from "../../components/layout/SEOLayout";
import Skeleton from "../../components/skeletons/Skeleton";
import { Item } from "../../core/types/item";
import animeServices from "../../services/animeServices";

const ItemsPage = () => {
  let router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<Array<Item>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let search = router.query.search;
    if (search) {
      setSearchText(search as string);
      searchAnime(search as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const searchAnime = async (search: string) => {
    const result: any = await animeServices.searchAnime(search, 4);
    setLoading(false);
    setResult(result.data);
  };

  return (
    <SEOLayout
      title={`Search ${searchText}`}
      description={`Looking for ${searchText}`}
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {loading ? (
            <>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
            </>
          ) : null}
          {result.map((item: Item, index) => (
            <div
              key={index}
              className="border border-gray-400 shadow-md rounded-md max-w-md p-4 relative bg-gray-50"
            >
              <div className="flex flex-row pb-6 justify-between">
                <div className="max-w-xs">
                  <p className="font-bold ">{item.title}</p>
                  <p className="synopsis__truncate text-justify text-sm">
                    {item.synopsis}
                  </p>
                </div>
                <picture className="pl-4">
                  <Image
                    style={{ maxWidth: "120px" }}
                    src={item.images.jpg.image_url}
                    alt={`poster ${item.title}`}
                    width="120"
                    height="170"
                  />
                </picture>
              </div>
              <div className="flex flex-row items-center space-x-1 absolute left-2 bottom-2">
                <FaStar color="orange" />
                <p>{item.score}</p>
              </div>
              <div className="absolute right-2 bottom-2">
                <Link href={`/items/${item.mal_id}`}>
                  <span className="font-semibold text-blue-500 self-end cursor-pointer">
                    Ver más
                  </span>
                </Link>
              </div>
            </div>
          ))}

          {result.length === 0 && !loading ? (
            <div className="perfect_center w-screen flex flex-col md:flex-row items-center justify-center">
              <FaSadTear
                className="mb-8 mr-0 md:mr-2"
                color="rgb(96 165 250)"
                size={40}
              />
              <p className="font-bold text-3xl pb-10 max-w-md text-center text-blue-400">
                we did not find the anime you are looking for
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </SEOLayout>
  );
};

export default ItemsPage;
