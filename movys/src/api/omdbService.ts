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

  async fetchImageByReference(ref: string) {
    try {
      const response = await axios.request({
        url: this.IMAGE_URL + ref,
        method: 'GET',
      });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
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

      console.log('RESP : ', response.data.results[0].title);

      if (response.data.Error) throw new Error(response.data.Error);

      const movies: Movie[] = response.data.results.map((mov: any) => ({
        title: mov.title,
        img: mov.poster_path,
      }));

      return movies;
    } catch (error) {
      console.log('ERR : error : ', (error as Error).message);
      throw (error as Error).message;
    }
  }
}
