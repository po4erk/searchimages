import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import ImagesSearch from './containers';

const App = () => (
  <Provider store={store}>
    <ImagesSearch />
  </Provider>
);

export default App;
