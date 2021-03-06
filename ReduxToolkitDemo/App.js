/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import UserList from './app/components/UserList';
import store from './app/components/store';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ReduxProvider store={store}>
          <UserList />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
