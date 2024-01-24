import {TMDBService} from '../../api/omdbService';

const getMovies = async (page: number, {rejectWithValue}: any) => {
  try {
    console.log('TA CHEGANDO ? ');
    const tmdbService = new TMDBService();

    const movies = await tmdbService.fetchTopRatedMovies(page);

    return movies;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
};

export const moviesService = {
  getMovies,
};
