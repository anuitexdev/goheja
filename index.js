/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
// Flurry
import Flurry from 'react-native-flurry-sdk';
// Bugsnag
import { Client } from 'bugsnag-react-native';

//--------------------- Bugsnag logger implementation START ------------------
const bugsnag = new Client('58f3bfb23c77f4094f16a58772a4c033');
//--------------------- Bugsnag logger implementation END ------------------
   
//--------------------- Flurry logger implemnentation START ------------------
new Flurry.Builder()
    .withCrashReporting(true)
    .withLogEnabled(true)
    .withLogLevel(Flurry.LogLevel.DEBUG)
    .withMessaging(true)
    .build("RB9KJ85FZFQ8K2HKDDP3", "SQGC5KQPXHCZ38DHZMQH");

// Flurry.getVersions().then((versions) => {
//     console.log('Versions: ' + versions.agentVersion + ' : ' + versions.releaseVersion + ' : ' + versions.sessionId);
// });

// // Set users preferences.
// Flurry.setAge(36);
// Flurry.setGender(Flurry.Gender.FEMALE);
// Flurry.setReportLocation(true);
    
// // Log Flurry events.
// Flurry.logEvent('React Native Event');
// Flurry.logEvent('React Native Timed Event', {param: 'true'}, true);
// Flurry.endTimedEvent('React Native Timed Event');

// Example to get Flurry Remote Configurations.
Flurry.addConfigListener((event) => {
    if (event.Type === Flurry.ConfigStatus.SUCCESS) {
      // Data fetched, activate it.
      Flurry.activateConfig();
    } else if (event.Type === Flurry.ConfigStatus.ACTIVATED) {
      // Received cached data, or newly activated data.
      Flurry.getConfigString('welcome_message', 'Welcome!').then((value) => {
        console.log((event.isCache ? 'Received cached data: ' : 'Received newly activated data: ') + value.welcome_message);
      });
    } else if (event.Type === Flurry.ConfigStatus.UNCHANGED) {
      // Fetch finished, but data unchanged.
      Flurry.getConfigString('welcome_message', 'Welcome!').then((value) => {
        console.log('Received unchanged data: ' + value.welcome_message);
      });
    } else if (event.Type === Flurry.ConfigStatus.ERROR) {
      // Fetch failed.
      console.log('Fetch error! Retrying: ' + event.isRetrying);
    }
});

Flurry.addMessagingListener((message) => {
  if (message.Type === Flurry.MessageType.RECEIVED) {
    Flurry.willHandleMessage(false);
  } else if (message.Type === Flurry.MessageType.CLICKED) {
    Flurry.willHandleMessage(false);
  }
 
  Flurry.printMessage(message);
});

Flurry.fetchConfig();
//--------------------- Flurry logger implemnentation END ------------------

AppRegistry.registerComponent(appName, () => App);
