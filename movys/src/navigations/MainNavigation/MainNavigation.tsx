import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//* <-- SCREENS -->
import Landing from '../../screens/landing/Landing';
import MoviesList from '../../screens/moviesList/MoviesList';
import Movie from '../../screens/movie/Movie';
import MoviesListContainer from '../../screens/moviesList/MoviesListContainer';
import {colors} from '../../styles/colors';

export type MainStackParamList = {
  Landing: undefined;
  MoviesList: undefined;
  Movie: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName="MoviesList"
      screenOptions={({navigation, route}) => ({
        headerShown: false,
        headerTitleAlign: 'center',
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
        },
      })}>
      <MainStack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: true,
        }}
      />
      <MainStack.Screen
        name="MoviesList"
        component={MoviesListContainer}
        options={{headerShown: true, headerTitle: 'Movys'}}
      />
      <MainStack.Screen
        name="Movie"
        component={Movie}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
