/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import MainReducer from './redux/reducers/main.reducer';
import Navigation from "./app.routing";
import Tabs from './views/app/logged.routing';

let store = createStore(MainReducer, applyMiddleware(thunk));

const App = () => {
  // const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
