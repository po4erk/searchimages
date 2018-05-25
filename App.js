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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

