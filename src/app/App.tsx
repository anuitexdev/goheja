/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navigation from "./navigation/app.routing";
import reducers from './redux/reducers';
import SafeAreaView from 'react-native-safe-area-view';
import Header from './components/header/header';
<<<<<<< HEAD
import { StatusBar, Alert, Platform } from 'react-native';
=======
import { StatusBar, Platform } from 'react-native';
>>>>>>> b6a5933bc04f99fe7828f2411760384aaf622196

let store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: 'red'}}/>

      {Platform.OS === 'ios' ?  <Header/>: null} 
      <Navigation />
      <SafeAreaView forceInset={Platform.OS == 'ios' ? {bottom: 'always'} :  {bottom: 'never'} } style={{backgroundColor: 'red'}}/>
    </Provider>
  )}
};4

