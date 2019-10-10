import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, View, SafeAreaView } from 'react-native';

import BasicInfoAthleteScreen from './basicInfo/basicInfo.view';
import YourSelfAthleteScreen from './yourself/yourselfAthlete.view';
import UnitsAthleteScreen from './units/units.view';
import PersonalInfoScreen from './personalInfo/personalInfo.view';
import SuccessRegisterScreen from './successRegister/successRegister.view';
import Wizard from '../../../../components/wizard/wizard.view';
import ConnectTeamView from "./connectTeam/connectTeam.view";

interface Props {
    currentStep: number,
}


class AthleteScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    render() {

        return (
            <Fragment>
                <ScrollView>
             
             {this.props.currentStep <5 && this.props.currentStep !== 0 ? 
                <Wizard 
                title="Hello World" 
                numberOfSteps={5} 
                currentStep={this.props.currentStep}
                /> : null}
            <View> 
            {
                this.props.currentStep === 0 ? <ConnectTeamView/> :
                this.props.currentStep === 1 ? <BasicInfoAthleteScreen/> :
                this.props.currentStep === 2 ? <YourSelfAthleteScreen/> :
                this.props.currentStep === 3 ? <UnitsAthleteScreen/> :
                this.props.currentStep === 4 ? <PersonalInfoScreen/> :
                this.props.currentStep === 5 ? <SuccessRegisterScreen/> :
                <BasicInfoAthleteScreen/>
            }
            </View>
             
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currentStep: state.AuthReducer.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AthleteScreen);