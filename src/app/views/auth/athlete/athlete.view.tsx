import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, View } from 'react-native';
import Header from '../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import BasicInfoAthleteScreen from './basicInfo/basicInfo';
import YourSelfAthleteScreen from './yourself/yourselfAthlete';
import UnitsAthleteScreen from './units/units';
import PersonalInfoScreen from './personalInfo/personalInfo';
import Wizard from '../../../components/wizard/wizard.view';
interface Props {
    // navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    currentStep: number,
}


class AthleteScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)
console.log(this.props.currentStep);

    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                <Wizard/>
            <View> 
            {this.props.currentStep === 1 ? <BasicInfoAthleteScreen/> :
             this.props.currentStep === 2 ? <YourSelfAthleteScreen/> :
             this.props.currentStep === 3 ? <UnitsAthleteScreen/> :
             this.props.currentStep === 4 ? <PersonalInfoScreen/> :
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