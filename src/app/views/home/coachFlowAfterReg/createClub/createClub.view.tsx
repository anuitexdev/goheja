import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from 'react-native';
import createClubStyle from "./createClub.style";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import * as actions from '../../../../redux/actions/createGroup.actions';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
interface State {
    placeholder: string;

}

interface Props {
    nextStepNumber: (step: number) => void
}

class CreateClubView extends Component<Props, State> {
    public chart:any;
    constructor(props: Props) {
        super(props)

        this.state = {
            placeholder: '',
        }
    }

    componentDidMount() {
        let chart =  am4core.create("sdsd",am4charts.Axis);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }

    public onSubmit() {
        this.props.nextStepNumber(2)
    }

    render() {
        return(
            <View>
               <ScrollView>
               <View>
               <View style={createClubStyle.clubNameInput}>
                   <Text style={createClubStyle.titleName}>Club Name</Text>
                   <View style={createClubStyle.inputWrapper}>
                       <TextInput 
                       style={[this.state.placeholder.length == 0 ? {fontStyle: 'italic'} : {fontStyle: 'normal'}, createClubStyle.inputClub]} 
                       placeholder="Type Club Name..." 
                       onChangeText={(txt) => this.setState({placeholder: txt})}
                       value={this.state.placeholder}
                       >
                       </TextInput>
                       <View>
                            <Text>dsfsdf</Text>  
                            {this.chart}                      
                       </View>
                       <TouchableOpacity 
                       style={createClubStyle.nextBtn}
                       onPress={() => this.onSubmit()}
                       >
                           <Text style={createClubStyle.nextBtnText}>
                               Next
                           </Text>
                       </TouchableOpacity>
                   </View>
               </View>
           </View>
               </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (step: number) => dispatch(actions.changeStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateClubView);
