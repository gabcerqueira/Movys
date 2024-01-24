import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../../models/Movie';
import MoviesCard from '../../components/moviesCard/MoviesCard';
import {useAppDispatch} from '../../app/hooks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../navigations/MainNavigation/MainNavigation';
import {getMovie} from '../../features/movies/moviesActions';

type Props = {
  movies: Movie[];
};

const MoviesList = ({movies}: Props) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const handleMovieNavigation = (movie: Movie) => {
    dispatch(getMovie(movie));

    navigation.navigate('Movie');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {movies.map(movie => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onPress={() => handleMovieNavigation(movie)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
});
