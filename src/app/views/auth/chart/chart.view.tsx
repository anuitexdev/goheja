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
import { Dimensions, View, Text, Alert, ScrollView, Platform } from 'react-native';
import WorkoutService from '../../../services/workout.service';
import Header from '../../../components/header/header';

import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {

}

interface State {
    laps: [],
    heartRate: [],
    heartTime: [],
    Cadence: [],
    pace: [],
    elevation: [],
    distance: [],
    isTime: boolean,
    isMultichart: boolean,
    chartLoading: {
        first: boolean,
        second: boolean,
        third: boolean,
        fourth: boolean,
    },

}

class ChartScreen extends Component<Props, State> {

    private data: any;
    private renderCounter: number = 0;

    constructor(props: Props, private workoutService: WorkoutService) {
        super(props)
        this.state = {
            laps: [],
            heartRate: [],
            heartTime: [],
            Cadence: [],
            pace: [],
            elevation: [],
            distance: [],
            isTime: true,
            isMultichart: false,
            chartLoading: {
                first: false,
                second: false,
                third: false,
                fourth: false,
            },
        }
    }
    private responseData: any = {};

    componentWillMount = async () => {
        this.workoutService = new WorkoutService();
        await this.getChartData();

        const laps = this.responseData.Sessions[0].Laps;
        const heartTimeArr: any = [];
        const heartRate: any = [];
        let heartTimeArrToShow: any = [];
        const Cadence: any = [];
        const pace: any = [];
        const elevation: any = [];
        const distance: any = [];
        let distanceToShow: any = [];

        laps.map((lapItem: any) => {
            lapItem.Records.map((recordItem: any) => {
                let formattedDate = moment(recordItem.TimestampDt).format('HH:mm:ss');
                heartTimeArr.push(formattedDate);
                heartRate.push(recordItem.HeartRate);
                Cadence.push(recordItem.Cadence);
                pace.push(recordItem.Speed.toFixed(1));
                elevation.push(recordItem.Altitude);
                distance.push(recordItem.Distance.toFixed(1));
            })
        })


        heartTimeArrToShow = this.getTimeToShow(heartTimeArr);
        distanceToShow = this.getTimeToShow(distance)
        this.setState({
            heartTime: heartTimeArrToShow,
            heartRate,
            Cadence,
            pace,
            elevation,
            distance: distanceToShow,
        });
    }


    // private loadChart =(chartNumber: number) =>{


    // if(this.renderCounter === 1){
    //     this.setState({
    //         chartLoading: {
    //      ...this.state.chartLoading,
    //      second: true,
    //         }
    //     })
    // }
    // this.renderCounter++;

    // for(let key in this.state.chartLoading){


    //     if(this.state.chartLoading[key] === false ){
    //         this.setState({
    //             chartLoading: {
    //             ...this.state.chartLoading,
    //             [this.state.chartLoading[key]]: true,
    //             }
    //         })
    //         return null;
    //     }

    //     return null;
    // }
    // return null;
    // }

    private getTimeToShow = (timeArr: any) => {
        const timeStep = Math.floor((timeArr.length - 2) / 4)
        let nextStep = timeStep;
        let resArray = [];
        resArray.push(timeArr[0]);
        for (let i = 0; i < 4; i++) {
            resArray.push(timeArr[nextStep]);
            nextStep += timeStep;
        }
        resArray.push(timeArr[timeArr.length - 1])
        return resArray;
    }

    private getChartData = async () => {
        const res = await this.workoutService.getChartData();
        this.responseData = res.data;
    }

    private setCoordinate = () => {
        this.setState({
            isTime: !this.state.isTime,
        })
    }


    render() {

        return (
            <ScrollView style={{ paddingBottom: 50 }}>
                {Platform.OS === 'android' ? <Header /> : null}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={this.setCoordinate}
                        style={{
                            padding: 10,
                            borderRadius: 4,
                            borderWidth: 0.5,
                            borderColor: '#d6d7da',
                        }}
                    >
                        <Text>Distance/Time</Text>

                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 50 }}>
                    <Text>Heart Rate</Text>
                    <LineChart
                        data={{
                            labels: this.state.isTime ? this.state.heartTime.slice(0, 6) : this.state.distance.length !== 0 ? this.state.distance : [0, 1],
                            datasets: [
                                {
                                    data: this.state.heartRate.length === 0 ? [0, 1] : this.state.heartRate
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
                            labels: this.state.isTime ? this.state.heartTime.slice(0, 6) : this.state.distance.length !== 0 ? this.state.distance : [0, 1],
                            datasets: [
                                {
                                    data: this.state.heartRate.length === 0 ? [0, 1] : this.state.Cadence,
                                },
                                // {
                                //     data: this.state.heartRate.length === 0 ? [0, 1] : [33.33,33.33,33.33,],
                                // }
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
                    <Text>Pace</Text>
                    <LineChart
                        data={{
                            labels: this.state.isTime ? this.state.heartTime.slice(0, 6) : this.state.distance.length !== 0 ? this.state.distance : [0, 1],
                            datasets: [
                                {
                                    data: this.state.pace.length === 0 ? [0, 1] : this.state.pace
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
                    <Text>Elevation</Text>
                    <LineChart
                        data={{
                            labels: this.state.isTime ? this.state.heartTime.slice(0, 6) : this.state.distance.length !== 0 ? this.state.distance : [0, 1],
                            datasets: [
                                {
                                    data: this.state.elevation.length === 0 ? [0, 1] : this.state.elevation
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
            </ScrollView>
        );
    }

};


const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen);
