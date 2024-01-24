import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../app/hooks';
import {selectMovie} from '../../features/movies/moviesSelectors';
import {
  BackButton,
  Container,
  MovieDetailsContainer,
  MovieImage,
  MovieTitle,
  Overview,
  Rating,
  ReleaseDate,
} from './style';
import {Icon} from '@rneui/themed';
import {colors} from '../../styles/colors';
import {NavigationProp} from '@react-navigation/native';
import {MainStackParamList} from '../../navigations/MainNavigation/MainNavigation';
type Props = {
  navigation: NavigationProp<MainStackParamList>;
};

const Movie = ({navigation}: Props) => {
  const movie = useAppSelector(selectMovie);

  return (
    <Container>
      <BackButton>
        <Icon
          name="arrow-left"
          type="material-community"
          color={colors.ice}
          onPress={() => navigation.goBack()}
          size={30}
        />
      </BackButton>

      <MovieImage
        source={{uri: movie?.img}}
        resizeMode="stretch"
        resizeMethod="scale"
      />
      <MovieDetailsContainer>
        <MovieTitle>{movie?.title}</MovieTitle>
        <ReleaseDate>{movie?.release_date}</ReleaseDate>
        <Overview>{movie?.overview}</Overview>
        <Rating>Rating: {movie?.vote_average.toFixed(2)}</Rating>
      </MovieDetailsContainer>
    </Container>
  );
};

export default Movie;

const styles = StyleSheet.create({});
