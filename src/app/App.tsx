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
import AppleHealthKit from 'rn-apple-healthkit'; 
import { View, Text } from 'react-native';



let options = {
  permissions: {
      read: [
        "StepCount",
        "DateOfBirth",
        "HeartRate",
        "DateOfBirth"
      ]
  }
};

let heartRateOptions = {
  unit: 'bpm', // optional; default 'bpm'
  startDate: (new Date(2016,4,27)).toISOString(), // required
  endDate: (new Date()).toISOString(), // optional; default now
  ascending: false, // optional; default false
  limit:10, // optional; default no limit
};
// let d = new Date(2019,10,6);
// let stepCountOptions = {
//   date: d.toISOString()
// };


AppleHealthKit.initHealthKit(options , (err: string, results: Object) => {
  if(err) {
    console.log("error init HealthKit", err);
    return;
  }else{
    AppleHealthKit.getHeartRateSamples(heartRateOptions , (err: Object, results: Array<Object>) => {
      if (err) {
        return;
      }
      console.log("HeartRate:", results)
    });
  }
});

export default class App extends Component {
  constructor(props: any) {
    super(props);
 

  }

  render() {
  return (
    <View>
    <Text>
      Test
    </Text>
  </View>
  )}
};

