import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
// import { ECharts } from "react-native-echarts-wrapper";
 
export default class Echart extends Component {
 testArray:string[] =[];
 numberArr: number[]=[];
    constructor(props:any){
        super(props);
        for(let i=0; i<1000; i++){
            this.testArray.push(Math.round(Math.random()*1000).toString());
            this.numberArr.push(Math.round(Math.random()*1000))
        }
    }
   

   
  option = {
    xAxis: {
      type: "category",
      data: this.testArray
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: this.numberArr,
        type: "line"
      }
    ]
  };
 
  additionalCode = `
        chart.on('click', function(param) {
            var obj = {
            type: 'event_clicked',
            data: param.data
            };
 
            sendData(JSON.stringify(obj));
        });
    `;
 
  onData = param => {
    const obj = JSON.parse(param);
 
    if (obj.type === "event_clicked") {
      alert(`you tapped the chart series: ${obj.data}`);
    }
  };
 
  onRef = ref => {
    if (ref) {
      this.chart = ref;
    }
  };
 
  onButtonClearPressed = () => {
    this.chart.clear();
  };
 
  render() {
  //     console.log(this.testArray);
      
  //   return (
  //     <SafeAreaView style={styles.chartContainer}>
  //       <Button title="Clear" onPress={this.onButtonClearPressed} />
 
  //       <ECharts
  //         ref={this.onRef}
  //         option={this.option}
  //         additionalCode={this.additionalCode}
  //         onData={this.onData}
  //         onLoadEnd={() => {
  //           this.chart.setBackgroundColor("rgba(93, 169, 81, 0.1)");
  //         }}
  //       />
  //     </SafeAreaView>
  //   );
  // }
  <>
  </>
}
}
 
const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});