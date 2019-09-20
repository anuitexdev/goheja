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
import Navigation from "./navigation/app.routing";
import reducers from './redux/reducers';

let store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
