import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Platform } from "react-native";
import FusionCharts from "react-native-fusioncharts";
import window from '../../../theme/variables';
import { MessagePort } from "worker_threads";
import { ScrollView } from 'react-native-gesture-handler';

const dataSource = {
  chart: {
    caption: "Deaths reported because of mosquito bites in India",
    subcaption: "(As per government records)",
    showvalues: "0",
    numvisibleplot: "12",
    plottooltext:
      "<b>$dataValue</b> people died because of mosquito bites in $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "1994"
        },
        {
          label: "1995"
        },
        {
          label: "1996"
        },
        {
          label: "1997"
        },
        {
          label: "1998"
        },
        {
          label: "1999"
        },
        {
          label: "2000"
        },
        {
          label: "2001"
        },
        {
          label: "2002"
        },
        {
          label: "2003"
        },
        {
          label: "2004"
        },
        {
          label: "2005"
        },
        {
          label: "2006"
        },
        {
          label: "2007"
        },
        {
          label: "2008"
        },
        {
          label: "2009"
        },
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
      ]
    }
  ],
  dataset: [
    {
      data: [
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
        {
          value: "15622"
        },
        {
          value: "10612"
        },
        {
          value: "15820"
        },
        {
          value: "26723"
        },
        {
          value: "35415"
        },
        {
          value: "25555"
        },
        {
          value: "81803"
        },
        {
          value: "47950"
        },
        {
          value: "42396"
        },
        {
          value: "19435"
        },
        {
          value: "9780"
        },
        {
          value: "23243"
        },
        {
          value: "28619"
        },
        {
          value: "8477"
        },
        {
          value: "3503"
        },
        {
          value: "14278"
        },
        {
          value: "30522"
        },
        {
          value: "61518"
        },
        {
          value: "24819"
        },
        {
          value: "16437"
        },
        {
          value: "21171"
        },
        {
          value: "1690"
        },
        {
          value: "2418"
        },
        {
          value: "11253"
        },
      ]
    }
  ],
  events: {
    dataPlotClick: (eventObj, dataObj) => {
      console.log(eventObj);
    },
    beforeInitialize: function () {
      console.log("Initializing mychart...");
    },
    message: function () {
      console.log("Initializing mychart...");
    },
    "entityClick": function () {
      console.log("Initializing mychart...");
    },
  }

};

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'zoomline',
      width: window.width,
      dataFormat: 'json',
      height: '400',
      dataSource,
      events: {
        dataPlotClick: (eventObj, dataObj) => {

          console.log(eventObj);
        },
        beforeInitialize: function () {
          console.log("Initializing mychart...");
        },
        message: function () {
          console.log("Initializing mychart...");
        },
        "entityClick": function () {
          console.log("Initializing mychart...");
        },
      }
    };

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      //   ios: require("./assets/fusioncharts.html"),
      android: { uri: "file:///android_asset/fusioncharts.html" }
    });
  }
  private chartRef: any;
  componentDidMount = () => {
    // console.log(this.chartRef);

    // this.chartRef.props.listener(e);
    // this.chartRef.props.handleChartEvents()

  }

  private test = () => {
    console.log('test');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>
            FusionCharts Integration with React Native
        </Text>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={this.state.type}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={this.state.dataSource}
              libraryPath={this.libraryPath} // set the libraryPath property
              listener={(e: any) => console.log(e)}
              // dataplotRollOver={(e: any) => this.test(e)}
              // handleChartEvents={(e: any) => this.test(e)}
              // // ref={(re) => this.chartRef = ref}
              events={this.state.events}

            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={this.state.type}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={this.state.dataSource}
              libraryPath={this.libraryPath} // set the libraryPath property
              listener={() => this.test()}
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={this.state.type}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={this.state.dataSource}
              libraryPath={this.libraryPath} // set the libraryPath property
              listener={() => this.test()}
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={this.state.type}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={this.state.dataSource}
              libraryPath={this.libraryPath} // set the libraryPath property
              listener={() => this.test()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  chartContainer: {
    height: 200,
    marginTop: 150,
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("ReactNativeFusionCharts", () => Test);