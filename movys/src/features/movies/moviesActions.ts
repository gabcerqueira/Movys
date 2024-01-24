import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {moviesService} from './moviesService';
import {Movie} from '../../models/Movie';

export const getMovies = createAsyncThunk<
  Movie[],
  number,
  {rejectValue: string}
>('movies/getMovies', moviesService.getMovies);

export const getMovie = createAction<Movie>('movies/getMovie');

export const addMovies = createAsyncThunk<Movie[], number>(
  'movies/addMovies',
  moviesService.getMovies,
);
