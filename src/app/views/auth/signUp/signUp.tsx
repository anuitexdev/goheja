import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView } from "react-native";
import WelcomeScreen from './welcome/welcome';
import CoachBasicInfoScreen from './coach/basicInfo/basicInfo.view';
import Header from '../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import AthleteScreen from './athlete/athlete.view';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    role: string,
}

class SignUpScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <ScrollView>
                    <Header />
                    { 
                        !this.props.role ? <WelcomeScreen navigation={this.props.navigation} /> 
                        : this.props.role === 'athlete' ? <AthleteScreen/> 
                            : <CoachBasicInfoScreen navigation={this.props.navigation}/>
                    }

                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    role: state.AuthReducer.role,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);