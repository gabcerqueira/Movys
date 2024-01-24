import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import MoviesList from './MoviesList';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getMovies} from '../../features/movies/moviesActions';
import {
  selectLoadingMovies,
  selectMovies,
} from '../../features/movies/moviesSelectors';
import SkeletonList from '../../components/skeletonList/SkeletonList';

type Props = {};
const DEFAULT_PAGE = 1;
const Container = WithSpinner(MoviesList, SkeletonList);
const MoviesListContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const isLoading = useAppSelector(selectLoadingMovies);

  useEffect(() => {
    dispatch(getMovies(DEFAULT_PAGE));
  }, []);

  return <Container isLoading={isLoading} movies={movies} />;
};

export default MoviesListContainer;
