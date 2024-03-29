import axios from 'axios';
import {TMDBIMAGEURL, TMDbKey, TMDbUrl} from './env';
import {Movie} from '../models/Movie';

export class TMDBService {
  BASE_URL: string;
  IMAGE_URL: string;
  constructor() {
    this.BASE_URL = `${TMDbUrl}`;
    this.IMAGE_URL = `${TMDBIMAGEURL}`;
  }

  async fetchTopRatedMovies(page: number): Promise<Movie[]> {
    try {
      const response = await axios.request({
        url:
          this.BASE_URL +
          `/top_rated?` +
          `&page=${page || 1}&api_key=${TMDbKey}`,
        method: 'GET',
      });

      if (response.data.Error) throw new Error(response.data.Error);

      const movies: Movie[] = response.data.results.map((mov: any) => ({
        title: mov.title,
        img: this.IMAGE_URL + mov.poster_path,
        id: mov.id,
        overview: mov.overview,
        release_date: mov.release_date,
        vote_average: mov.vote_average,
      }));

      return movies;
    } catch (error) {
      throw (error as Error).message;
    }
  }
}
