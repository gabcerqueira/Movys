import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../app/hooks';
import {selectMovie} from '../../features/movies/moviesSelectors';

type Props = {};

const Movie = (props: Props) => {
  const movie = useAppSelector(selectMovie);

  return (
    <View>
      <Text>{movie?.title}</Text>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
