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
<<<<<<< HEAD

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      // ios: require('./assets/fusioncharts.html'),
      // android: { uri: 'goheja:///android_asset/fusioncharts.html' }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
          {/* <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          /> */}
        </View>
      </View>
    );
  }
=======
  }

  render() {
  //  
  <>
  </>
}
>>>>>>> 5c54066215d936392ebbb3f0435b3b78dece0c3e
}
const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('ReactNativeFusionCharts', () => Test);
=======
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
>>>>>>> 5c54066215d936392ebbb3f0435b3b78dece0c3e
