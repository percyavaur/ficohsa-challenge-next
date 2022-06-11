export interface Item {
  mal_id: number;
  title: string;
  title_english: string;
  title_japanese: string;
  synopsis: string;
  background: string;
  duration: string;
  episodes: number;
  year: number;
  score: number;
  rating: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
  };
}
