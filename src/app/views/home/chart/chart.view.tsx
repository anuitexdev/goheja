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


interface Props {

}

interface State {
    lapsCounter: number,

}

class ChartScreen extends Component<Props, State> {

    private data: any;

    constructor(props: Props, private workoutService: WorkoutService) {
        super(props)
        this.state = {
            lapsCounter: 0,
        }
    }


private responseData: any = {}; 

    componentWillMount() {

        this.workoutService = new WorkoutService();
        this.responseData = {
            "_id" : "ObjectId" +("5da6d5f755ec451b68fc0ae7"),
            "UserID" : "5b96853cdd6505dd6ba78a8c",
            "FileInfo" : {
                "SerialNumber" : "3946803388",
                "TimeCreatedDt" : 'ISODate' + ("2019-10-16T02:33:00.000Z"),
                "TimeCreated" : 940127580,
                "ManufacturerStr" : "Garmin",
                "Manufacturer" : 1,
                "Product" : 2691,
                "Type" : 4
            },
            "DeviceInfo" : {
                "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:17.000Z"),
                "Timestamp" : 940127897,
                "ManufacturerStr" : "Garmin",
                "Manufacturer" : 1,
                "Product" : 2691,
                "SoftwareVersion" : 14.1000003814697,
                "DeviceIndex" : 1,
                "DeviceType" : 4,
                "SourceTypeStr" : "Local",
                "SourceType" : 5
            },
            "Activity" : {
                "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:26.000Z"),
                "Timestamp" : 940127906,
                "TotalTimerTime" : 312.4580078125,
                "LocalTimestamp" : 940138706,
                "NumSessions" : 1,
                "Type" : 0,
                "EventStr" : "Activity",
                "Event" : 26,
                "EventTypeStr" : "Stop",
                "EventType" : 1
            },
            "UserProfile" : {
                "WakeTime" : 17100,
                "SleepTime" : 79200,
                "Weight" : 87.0,
                "UserRunningStepLength" : 0.0,
                "UserWalkingStepLength" : 0.0,
                "Gender" : 1,
                "Height" : 1.75999999046326,
                "Language" : 31,
                "ElevSetting" : 0,
                "WeightSetting" : 0,
                "RestingHeartRate" : 0,
                "HrSetting" : 1,
                "SpeedSetting" : 0,
                "DistSetting" : 0,
                "ActivityClass" : 30,
                "PositionSetting" : 2,
                "TemperatureSetting" : 0,
                "HeightSetting" : 0
            },
            Sessions : [ 
                {
                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:26.000Z"),
                    "Timestamp" : 940127906,
                    "StartTimeDt" : 'ISODate' + ("2019-10-16T02:32:59.000Z"),
                    "StartTime" : 940127579,
                    "TotalElapsedTime" : 325.763000488281,
                    "TotalTimerTime" : 312.4580078125,
                    "TotalDistance" : 100.0,
                    "TotalCycles" : 62,
                    "AvgLeftPowerPhase" : 255.0,
                    "AvgLeftPowerPhasePeak" : 255.0,
                    "AvgRightPowerPhase" : 255.0,
                    "AvgRightPowerPhasePeak" : 255.0,
                    "AvgPowerPosition" : 65535,
                    "MaxPowerPosition" : 65535,
                    "MessageIndex" : 0,
                    "TotalCalories" : 24,
                    "AvgSpeed" : 0.833999991416931,
                    "MaxSpeed" : 1.07200002670288,
                    "FirstLapIndex" : 0,
                    "NumLaps" : 5,
                    "AvgStrokeDistance" : 1.61000001430511,
                    "PoolLength" : 25.0,
                    "NumActiveLengths" : 4,
                    "EventStr" : "Lap",
                    "Event" : 9,
                    "EventTypeStr" : "Stop",
                    "EventType" : 1,
                    "SportStr" : "Swimming",
                    "Sport" : 5,
                    "SubSport" : 17,
                    "AvgCadence" : 31,
                    "Trigger" : 0,
                    "PoolLengthUnit" : 0,
                    "AvgCadencePosition" : 255,
                    "MaxCadencePosition" : 255,
                    "EnhancedAvgSpeed" : 0.833999991416931,
                    "EnhancedMaxSpeed" : 1.07200002670288,
                    Laps : [ 
                        {
                            "TimestampDt" : 'ISODate' + ("2019-10-16T02:35:34.000Z"),
                            "Timestamp" : 940127734,
                            "StartTimeDt" : 'ISODate' + ("2019-10-16T02:32:59.000Z"),
                            "StartTime" : 940127579,
                            "TotalElapsedTime" : 153.649002075195,
                            "TotalTimerTime" : 153.649002075195,
                            "TotalDistance" : 100.0,
                            "TotalCycles" : 62,
                            "AvgLeftPowerPhase" : 255.0,
                            "AvgLeftPowerPhasePeak" : 255.0,
                            "AvgRightPowerPhase" : 255.0,
                            "AvgRightPowerPhasePeak" : 255.0,
                            "AvgPowerPosition" : 65535,
                            "MaxPowerPosition" : 65535,
                            "MessageIndex" : 0,
                            "TotalCalories" : 24,
                            "AvgSpeed" : 0.833999991416931,
                            "MaxSpeed" : 1.07200002670288,
                            "NumLengths" : 5,
                            "FirstLengthIndex" : 0,
                            "AvgStrokeDistance" : 1.61000001430511,
                            "NumActiveLengths" : 4,
                            "EventStr" : "Lap",
                            "Event" : 9,
                            "EventTypeStr" : "Stop",
                            "EventType" : 1,
                            "AvgCadence" : 31,
                            "LapTrigger" : 0,
                            "SportStr" : "Swimming",
                            "Sport" : 5,
                            "SwimStroke" : 0,
                            "SubSport" : 17,
                            "AvgCadencePosition" : 255,
                            "MaxCadencePosition" : 255,
                            "EnhancedAvgSpeed" : 0.833999991416931,
                            "EnhancedMaxSpeed" : 1.07200002670288,
                            "Records" : [ 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:35:34.000Z"),
                                    "Timestamp" : 940127734,
                                    "Distance" : 100.0,
                                    "Speed" : 0.602999985218048,
                                    "Cadence" : 26,
                                    "Temperature" : 27,
                                    "EnhancedSpeed" : 0.602999985218048
                                }
                            ]
                        }, 
                        {
                            "TimestampDt" : 'ISODate' + ("2019-10-16T02:35:38.000Z"),
                            "Timestamp" : 940127738,
                            "StartTimeDt" : 'ISODate' + ("2019-10-16T02:35:33.000Z"),
                            "StartTime" : 940127733,
                            "TotalElapsedTime" : 3.83999991416931,
                            "TotalTimerTime" : 3.83999991416931,
                            "TotalDistance" : 0.0,
                            "TotalCycles" : 0,
                            "AvgLeftPowerPhase" : 255.0,
                            "AvgLeftPowerPhasePeak" : 255.0,
                            "AvgRightPowerPhase" : 255.0,
                            "AvgRightPowerPhasePeak" : 255.0,
                            "AvgPowerPosition" : 65535,
                            "MaxPowerPosition" : 65535,
                            "MessageIndex" : 1,
                            "TotalCalories" : 0,
                            "AvgSpeed" : 0.0,
                            "MaxSpeed" : 0.0,
                            "NumLengths" : 0,
                            "FirstLengthIndex" : 5,
                            "AvgStrokeDistance" : 0.0,
                            "NumActiveLengths" : 0,
                            "EventStr" : "Lap",
                            "Event" : 9,
                            "EventTypeStr" : "Stop",
                            "EventType" : 1,
                            "AvgCadence" : 0,
                            "LapTrigger" : 0,
                            "SportStr" : "Swimming",
                            "Sport" : 5,
                            "SubSport" : 17,
                            "AvgCadencePosition" : 255,
                            "MaxCadencePosition" : 255,
                            "EnhancedAvgSpeed" : 0.0,
                            "EnhancedMaxSpeed" : 0.0,
                            "Records" : [ 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:35:34.000Z"),
                                    "Timestamp" : 940127734,
                                    "Distance" : 100.0,
                                    "Speed" : 0.602999985218048,
                                    "Cadence" : 26,
                                    "Temperature" : 27,
                                    "EnhancedSpeed" : 0.602999985218048
                                }, 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:35:38.000Z"),
                                    "Timestamp" : 940127738,
                                    "Distance" : 100.0,
                                    "Temperature" : 27
                                }
                            ]
                        }, 
                        {
                            "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:06.000Z"),
                            "Timestamp" : 940127886,
                            "StartTimeDt" : 'ISODate' + ("2019-10-16T02:35:38.000Z"),
                            "StartTime" : 940127738,
                            "TotalElapsedTime" : 146.350006103516,
                            "TotalTimerTime" : 146.350006103516,
                            "TotalDistance" : 0.0,
                            "TotalCycles" : 0,
                            "AvgLeftPowerPhase" : 255.0,
                            "AvgLeftPowerPhasePeak" : 255.0,
                            "AvgRightPowerPhase" : 255.0,
                            "AvgRightPowerPhasePeak" : 255.0,
                            "AvgPowerPosition" : 65535,
                            "MaxPowerPosition" : 65535,
                            "MessageIndex" : 2,
                            "TotalCalories" : 0,
                            "AvgSpeed" : 0.0,
                            "MaxSpeed" : 0.0,
                            "NumLengths" : 0,
                            "FirstLengthIndex" : 6,
                            "AvgStrokeDistance" : 0.0,
                            "NumActiveLengths" : 0,
                            "EventStr" : "Lap",
                            "Event" : 9,
                            "EventTypeStr" : "Stop",
                            "EventType" : 1,
                            "AvgCadence" : 0,
                            "LapTrigger" : 0,
                            "SportStr" : "Swimming",
                            "Sport" : 5,
                            "SubSport" : 17,
                            "AvgCadencePosition" : 255,
                            "MaxCadencePosition" : 255,
                            "EnhancedAvgSpeed" : 0.0,
                            "EnhancedMaxSpeed" : 0.0,
                            "Records" : [ 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:35:38.000Z"),
                                    "Timestamp" : 940127738,
                                    "Distance" : 100.0,
                                    "Temperature" : 27
                                }, 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:06.000Z"),
                                    "Timestamp" : 940127886,
                                    "Distance" : 100.0,
                                    "Temperature" : 27
                                }
                            ]
                        }, 
                        {
                            "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:14.000Z"),
                            "Timestamp" : 940127894,
                            "StartTimeDt" : 'ISODate' + ("2019-10-16T02:38:07.000Z"),
                            "StartTime" : 940127887,
                            "TotalElapsedTime" : 4.9210000038147,
                            "TotalTimerTime" : 4.9210000038147,
                            "TotalDistance" : 0.0,
                            "TotalCycles" : 0,
                            "AvgLeftPowerPhase" : 255.0,
                            "AvgLeftPowerPhasePeak" : 255.0,
                            "AvgRightPowerPhase" : 255.0,
                            "AvgRightPowerPhasePeak" : 255.0,
                            "AvgPowerPosition" : 65535,
                            "MaxPowerPosition" : 65535,
                            "MessageIndex" : 3,
                            "TotalCalories" : 0,
                            "AvgSpeed" : 0.0,
                            "MaxSpeed" : 0.0,
                            "NumLengths" : 0,
                            "FirstLengthIndex" : 7,
                            "AvgStrokeDistance" : 0.0,
                            "NumActiveLengths" : 0,
                            "EventStr" : "Lap",
                            "Event" : 9,
                            "EventTypeStr" : "Stop",
                            "EventType" : 1,
                            "AvgCadence" : 0,
                            "LapTrigger" : 0,
                            "SportStr" : "Swimming",
                            "Sport" : 5,
                            "SubSport" : 17,
                            "AvgCadencePosition" : 255,
                            "MaxCadencePosition" : 255,
                            "EnhancedAvgSpeed" : 0.0,
                            "EnhancedMaxSpeed" : 0.0,
                            "Records" : [ 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:14.000Z"),
                                    "Timestamp" : 940127894,
                                    "Distance" : 100.0,
                                    "Temperature" : 27
                                }
                            ]
                        }, 
                        {
                            "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:17.000Z"),
                            "Timestamp" : 940127897,
                            "StartTimeDt" : 'ISODate' + ("2019-10-16T02:38:12.000Z"),
                            "StartTime" : 940127892,
                            "TotalElapsedTime" : 3.69799995422363,
                            "TotalTimerTime" : 3.69799995422363,
                            "TotalDistance" : 0.0,
                            "TotalCycles" : 0,
                            "AvgLeftPowerPhase" : 255.0,
                            "AvgLeftPowerPhasePeak" : 255.0,
                            "AvgRightPowerPhase" : 255.0,
                            "AvgRightPowerPhasePeak" : 255.0,
                            "AvgPowerPosition" : 65535,
                            "MaxPowerPosition" : 65535,
                            "MessageIndex" : 4,
                            "TotalCalories" : 0,
                            "AvgSpeed" : 0.0,
                            "MaxSpeed" : 0.0,
                            "NumLengths" : 1,
                            "FirstLengthIndex" : 8,
                            "AvgStrokeDistance" : 0.0,
                            "NumActiveLengths" : 0,
                            "EventStr" : "Lap",
                            "Event" : 9,
                            "EventTypeStr" : "Stop",
                            "EventType" : 1,
                            "AvgCadence" : 0,
                            "LapTrigger" : 0,
                            "SportStr" : "Swimming",
                            "Sport" : 5,
                            "SubSport" : 17,
                            "AvgCadencePosition" : 255,
                            "MaxCadencePosition" : 255,
                            "EnhancedAvgSpeed" : 0.0,
                            "EnhancedMaxSpeed" : 0.0,
                            "Records" : [ 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:14.000Z"),
                                    "Timestamp" : 940127894,
                                    "Distance" : 100.0,
                                    "Temperature" : 27
                                }, 
                                {
                                    "TimestampDt" : 'ISODate' + ("2019-10-16T02:38:17.000Z"),
                                    "Timestamp" : 940127897,
                                    "Distance" : 100.0,
                                    "Temperature" : 27
                                }
                            ]
                        }
                    ]
                }
            ],
            "ghUserId" : "5b96853cdd6505dd6ba78a8c",
            "uploadId" : "cfgedbaXf2jm69580000999",
            "filePath" : "\\\\Mac\\Home\\Desktop\\fit\\fitfiles\\fitFiles\\g.fit",
            "specGroup" : "TestEnv"
        }
        this.setState({
            lapsCounter:  this.responseData.Sessions[0].Laps.length,
        })
        
        // this.data = this.workoutService.getChartData();
        // console.log(this.data);

    }


    render() {
        
        return (
            <View>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    onDataPointClick={(value: any) => Alert.alert(value.toString())
                    }
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel={"$"}
                    chartConfig={{
                        backgroundColor: "#e26a00",
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
                        borderRadius: 16
                    }}
                />
            </View>

        );
    }
};


const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen);
