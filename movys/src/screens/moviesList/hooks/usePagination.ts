import {useCallback, useState} from 'react';

type UsePaginationProps = {
  fetchFunction: (page: number) => Promise<void> | void;
  totalPages: number;
  initialPage: number;
};

const usePagination = ({
  fetchFunction,
  totalPages,
  initialPage,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleEndReached = useCallback(() => {
    if (currentPage < totalPages) {
      fetchFunction(currentPage);
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [currentPage, fetchFunction, totalPages]);

  return {currentPage, handleEndReached};
};

export default usePagination;

/*
//*USAGE

  const {currentPage, handleEndReached} = usePagination({
    fetchFunction: () => {
      dispatch(addMovies(currentPage + 1));
    },
    totalPages:totalPages,
    initialPage:1
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
