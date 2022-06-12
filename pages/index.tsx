import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SEOLayout } from "../components/layout";

interface Props {}

const HomePage: NextPage<Props> = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) router.push(`/items?search=${search}`);
  };

  return (
    <SEOLayout
      title="Ficohsa Challenge"
      description="Welcome to ficohsa challenge"
    >
      <div className="w-screen perfect_center flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl pb-10 max-w-xs text-center text-blue-400">
          Search for your favorite anime
        </h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="border rounded-md border-gray-400 px-4 py-2 bg-gray-50 flex items-center">
            <input
              type="search"
              autoFocus
              placeholder="Search animes"
              value={search}
              className="bg-gray-50"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="border-l pl-3 border-gray-400">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </SEOLayout>
  );
};

export default HomePage;
