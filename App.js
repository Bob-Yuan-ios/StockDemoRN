/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import RootStackContainer from './src/containers/index';

import {Provider} from 'react-redux';
import configureStore from './src/store';

const store = configureStore({});

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <RootStackContainer />
      </Provider>
  );
};

export default App;

