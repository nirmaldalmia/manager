import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'react-native-firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount = () => {
    const config = {
      apiKey: "AIzaSyBi1WUcrRZ5_BBcNIFkLg2WyGzoKZHxgWA",
      authDomain: "manager-65e79.firebaseapp.com",
      databaseURL: "https://manager-65e79.firebaseio.com",
      projectId: "manager-65e79",
      storageBucket: "manager-65e79.appspot.com",
      messagingSenderId: "123708140316"
    };
    firebase.initializeApp(config);
    console.disableYellowBox = true;
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}