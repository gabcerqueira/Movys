import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../../models/Movie';

type Props = {
  movies: Movie[];
};

const MoviesList = ({movies}: Props) => {
  console.log('MOVIES : ', movies);

  return (
    <ScrollView>
      <Text>MoviesList</Text>
    </ScrollView>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
