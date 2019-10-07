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
// import * as actions from './redux/actions/auth.actions';

let store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  constructor(props: any) {
    super(props);
 
    // store.dispatch(actions.getAllLanguages())
  }

  render() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )}
};

