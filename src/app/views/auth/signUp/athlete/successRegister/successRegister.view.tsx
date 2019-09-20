import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { View, Text } from 'react-native';

import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepNumber: number) => void,
    state: any,
}

interface State {

}

class SuccessRegisterScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
console.log(this.props.state);

    }

    render() {

        return (
            <View style ={styles.pageWrapper}>
                <View style={styles.backgroundCheck}><View style={styles.check}></View></View>
                <Text style={styles.welcome}>Welcome to Go-Heja</Text>
                <Text style={styles.approve}>We`ve sent you an account confirmation email approve request.</Text>
                <Text style={styles.approve}>Please approve the email to continue</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    state: state

});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepNumber: number) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessRegisterScreen);