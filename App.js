import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';
import Application from './src/components/Application';
import store from './src/store';

// const store = createStore(reducers, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Application />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;