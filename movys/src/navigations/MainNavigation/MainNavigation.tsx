import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../../screens/landing/Landing';
import MoviesList from '../../screens/moviesList/MoviesList';
import Movie from '../../screens/movie/Movie';

export type MainStackParamList = {
  Landing: undefined;
  MoviesList: undefined;
  Movie: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Landing"
      screenOptions={({navigation, route}) => ({
        headerShown: false,
        headerTitleAlign: 'center',
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
        component={MoviesList}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Movie"
        component={Movie}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
