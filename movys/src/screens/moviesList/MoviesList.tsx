import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Movie} from '../../models/Movie';
import MoviesCard from '../../components/moviesCard/MoviesCard';
import {useAppDispatch} from '../../app/hooks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../navigations/MainNavigation/MainNavigation';
import {
  addMovies,
  getMovie,
  getMovies,
} from '../../features/movies/moviesActions';
import usePullToRefresh from './hooks/usePullToRefresh';
import usePagination from './hooks/usePagination';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../styles/colors';

type Props = {
  movies: Movie[];
};
const INITIAL_PAGE = 1;
const MoviesList = ({movies}: Props) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const handleMovieNavigation = (movie: Movie) => {
    dispatch(getMovie(movie));

    navigation.navigate('Movie');
  };

  const {refreshing, onRefreshHandler}: any = usePullToRefresh({
    onRefreshFunction() {
      dispatch(getMovies(INITIAL_PAGE));
    },
  });

  const {currentPage, handleEndReached} = usePagination({
    fetchFunction: () => {
      dispatch(addMovies(currentPage + 1));
    },
    totalPages: 10,
    initialPage: 1,
  });

  return (
    <View style={{backgroundColor: colors.background}}>
      <FlatList
        testID="movies-list"
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MoviesCard
            key={item.id}
            movie={item}
            onPress={() => handleMovieNavigation(item)}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        numColumns={2}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          <ActivityIndicator size="large" color={colors.text} />
        }
      />
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'center',
  },
  separator: {
    height: 10,
  },
});
