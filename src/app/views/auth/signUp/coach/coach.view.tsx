import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import CoachBasicInfoScreen from './basicInfo/basicInfo.view';
import UnitsCoachScreen from './units/units.view';
import YourSelfCoachScreen from './yourself/yourself.view';
import ConfirmationScreen from './confirmation/confirmation.view';


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    currentStep: number,
}


class CoachScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                {/* <KeyboardAvoidingView enabled behavior="padding"
                 keyboardVerticalOffset={0}> */}
                    <ScrollView>
                    {this.props.currentStep === 0 ? <CoachBasicInfoScreen /> :
                        this.props.currentStep === 1 ? <UnitsCoachScreen /> :
                            this.props.currentStep === 2 ? <YourSelfCoachScreen /> :
                                this.props.currentStep === 3 ? <ConfirmationScreen /> :
                                    null
                    }
                    </ScrollView>
                {/* </KeyboardAvoidingView> */}
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currentStep: state.AuthReducer.coachCurrentStep,

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachScreen);