import {RootState} from '../../app/store';

export const selectMovies = (state: RootState) => state.movies.movies;

export const selectMovie = (state: RootState) => state.movies.movie;

export const selectLoadingMovies = (state: RootState) => state.movies.isLoading;
