import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'react-native-firebase';
import reducers from './src/reducers';

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
  }
  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text> textInComponent </Text>
        </View>
      </Provider>
    )
  }
}