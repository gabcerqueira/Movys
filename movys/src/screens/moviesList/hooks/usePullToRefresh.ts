import React, {useState, useCallback} from 'react';

interface PullToRefreshProps {
  onRefreshFunction: () => Promise<void> | void;
}

const usePullToRefresh = ({onRefreshFunction}: PullToRefreshProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshHandler = useCallback(async () => {
    try {
      setRefreshing(true);
      await onRefreshFunction();
    } finally {
      setRefreshing(false);
    }
  }, [onRefreshFunction]);

  return {refreshing, onRefreshHandler};
};

export default usePullToRefresh;

/*
//* USAGE
 const {refreshing, onRefreshHandler}: any = usePullToRefresh({
    onRefreshFunc: () => {
      dispatch(getMovies(INITIAL_PAGE));
    },
  });
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
          <ActivityIndicator
            size="small"
            color={colors.text}
          />
        }
      />
*/
