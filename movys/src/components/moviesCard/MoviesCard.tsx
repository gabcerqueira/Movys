import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../../models/Movie';
import {
  CardContainer,
  CardImage,
  ContentContainer,
  Title,
  Description,
} from './style';

type Props = {
  movie: Movie;
  onPress: () => void;
};

const MoviesCard = ({movie, onPress}: Props) => {
  return (
    <CardContainer onPress={onPress} testID="movies-card">
      <CardImage source={{uri: movie.img}} />

      <ContentContainer>
        <Title>{movie.title}</Title>
        <Description numberOfLines={2}>{movie.overview}</Description>
      </ContentContainer>
    </CardContainer>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({});
