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
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navigation from "./navigation/app.routing";
import reducers from './redux/reducers';
import {
  I18nManager,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

let store = createStore(reducers, applyMiddleware(thunk));

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require('../../src/app/translations/ar.json'),
  en: () => require("../../src/app/translations/en.json"),
  // fr: () => require("./src/translations/fr.json")
};

const translate: any = memoize(
  (key: any, config: any) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};


export default class App extends Component {
  constructor(props: any) {
    super(props);
    setI18nConfig(); // set initial config
  }

  componentDidMount() {
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  }

  public handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  render() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )}
};

