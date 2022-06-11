import { requests } from "../pages/api/axiosAgent";

const searchAnime = (searchText: string, limit: number) =>
  requests.get(`anime?q=${searchText}&sfw&limit=${limit}`);

const getAnimeById = (id: string) => requests.get(`anime/${id}/full`);

const animeServices = {
  searchAnime,
  getAnimeById,
};

export default animeServices;
