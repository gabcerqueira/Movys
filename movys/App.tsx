/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//18:15 - project setup
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import AppNavigation from './src/navigations/MainNavigation/AppNavigation';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'default'} />
      <AppNavigation />
    </Provider>
  );
}

export default App;
