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
import { StatusBar, Alert, Platform } from 'react-native';
import Flurry from 'react-native-flurry-sdk';

let store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  constructor(props: any) {
    super(props);

    Flurry.getVersions().then((versions) => {
      console.log('Versions: ' + versions.agentVersion + ' : ' + versions.releaseVersion + ' : ' + versions.sessionId);
    });
  }

  render() {
    console.disableYellowBox = true;

    // Bugsnag
    // Bugsnag.notify(RuntimeException("Test error"))

    // Set users preferences.
// Flurry.setAge(36);
// Flurry.setGender(Flurry.Gender.FEMALE);
// Flurry.setReportLocation(true);
    
// // Log Flurry events.
// Flurry.logEvent('React Native Event');
// Flurry.logEvent('React Native Timed Event', {param: 'true'}, true);
// Flurry.endTimedEvent('React Native Timed Event');
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: 'grey'}}/>

        {Platform.OS === 'ios' ?  <Header/>: null} 
        <Navigation />
        <SafeAreaView forceInset={Platform.OS == 'ios' ? {bottom: 'always'} :  {bottom: 'never'} } style={{backgroundColor: 'grey'}}/>
      </Provider>
    )
  }
};