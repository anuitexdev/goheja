import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions, View, Text, Alert } from 'react-native';
import WorkoutService from '../../../services/workout.service';

import moment from 'moment';


interface Props {

}

interface State {
    laps: [],
    heartRate: [],
    heartTime: [],
    Cadence: [],

}

class ChartScreen extends Component<Props, State> {

    private data: any;

    constructor(props: Props, private workoutService: WorkoutService) {
        super(props)
        this.state = {
            laps: [],
            heartRate: [],
            heartTime: [],
            Cadence: [],
        }
    }
    private responseData: any = {}; 

    componentWillMount = async () => {
        this.workoutService = new WorkoutService();
       await this.getChartData();

       const laps = this.responseData.Sessions[0].Laps;
       const heartTimeArr: any =[];
       const heartRate: any = [];
       const Cadence: any =[];

        laps.map((lapItem: any) => {
            lapItem.Records.map((recordItem: any) => {
                let formattedDate = moment(recordItem.TimestampDt).format('HH:mm:ss');
                heartTimeArr.push(formattedDate);
            })
       })
        laps.map((lapItem: any) => {
            lapItem.Records.map((recordItem: any) => {
                heartRate.push(recordItem.HeartRate);
            })
       })
        laps.map((lapItem: any) => {
            lapItem.Records.map((recordItem: any) => {
                Cadence.push(recordItem.Cadence);
            })
       })
       this.setState({
        heartTime: heartTimeArr,
        heartRate,
        Cadence,
        });
    }

    private getChartData = async () =>{
        const res = await this.workoutService.getChartData();
         this.responseData = res.data;
    }

    private changeLap= (lapNumber: number) => {
        console.log(lapNumber);
        
    }

    // private renderLaps = () => {
    // return (
    //     <View>
    //     {this.state.laps.map((item, index ) => (
    //     <TouchableOpacity
    //     style={{padding: 40}}
    //     key={index}
    //     onPress={()=>this.changeLap(index)}
    //     >
      
    //     <Text>`Lap ${index+1}`</Text>
    //     </TouchableOpacity>
    //     ))}
    //     </View>
    //  );
    // }

    


    render() {
         console.log(this.state);
         
        return (
            <>
    
            <View>
                <Text>Heart Rate</Text>
                <LineChart
                    data={{
                        labels: this.state.heartTime.slice(0,5),
                        datasets: [
                            {
                                data: this.state.heartRate.length ===0 ? [0,1] : this.state.heartRate.slice(0,5)
                            }
                        ]
                    }}
                    onDataPointClick={(value: any) => Alert.alert(value.toString())
                    }
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel={""}
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        paddingBottom: 50
                    }}
                />
                <Text>Run cadence</Text>
                <LineChart
                    data={{
                        labels: this.state.heartTime.slice(0,5),
                        datasets: [
                            {
                                data: this.state.heartRate.length ===0 ? [0,1] : this.state.Cadence.slice(0,5)
                            }
                        ]
                    }}
                    onDataPointClick={(value: any) => console.log(value)
                    }
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel={""}
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        paddingBottom: 50
                    }}
                />
            </View>
                    </>
        );
    }
};


const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen);
