import {createReducer} from '@reduxjs/toolkit';
import {Movie} from '../../models/Movie';
import {addMovies, getMovie, getMovies} from './moviesActions';

interface moviesState {
  movies: Movie[];
  movie: Movie | null;
  isLoading: boolean;
}

export const initialState: moviesState = {
  isLoading: false,
  movies: [],
  movie: null,
};

export const moviesReducer = createReducer(initialState, builder => {
  builder.addCase(getMovies.pending, state => ({
    ...state,
    isLoading: true,
  }));

  builder.addCase(getMovies.rejected, state => ({
    ...state,
    isLoading: false,
  }));

  builder.addCase(getMovies.fulfilled, (state, action) => ({
    ...state,
    isLoading: false,
    movies: action.payload,
  }));
  builder.addCase(getMovie, (state, action) => ({
    ...state,

    movie: action.payload,
  }));
  builder.addCase(addMovies.fulfilled, (state, action) => ({
    ...state,

    movies: [...state.movies, ...action.payload],
  }));
});
