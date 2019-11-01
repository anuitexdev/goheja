import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
// import HighchartsReactNative from '@highcharts/highcharts-react-native';

export default class TestScreen extends React.Component {

  constructor(props) {
    super(props);

    let testArr = [];
    for (let i = 0; i < 20000; i++) {
      testArr.push(i);
    }
    this.state = {
      chartOptions: {
        series: [{
          data: testArr
        }]
      }
    };
  }

  render() {
  //  
  <>
  </>
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
