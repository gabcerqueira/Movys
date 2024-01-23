import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {moviesService} from './moviesService';
import {Movie} from '../../models/Movie';

export const getMovies = createAsyncThunk<Movie[]>(
  'movies/getMovies',
  moviesService.getMovies,
);

export const getMovie = createAction<Movie>('movies/getMovie');
