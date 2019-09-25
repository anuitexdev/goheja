import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { View, Alert } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Header from '../../../components/header/header';
import styles from './forgotPassword.style';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import SendMailScreen from './sendEmail/sendMail.view';
import ResetPasswordScreen from './resetPassword/resetPassword.view';
import SuccessScreen from './success/success.view';


interface State {
    screenNumber: number,
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

class ForgotPasswordScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            screenNumber: 1,
        }
    }

    public getCurrentScreen = (screenNumber: number) => {
        this.setState({
            screenNumber,
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <View style={styles.container}>
                    <ScrollView>
                        {this.state.screenNumber === 1 ? <SendMailScreen navigation={this.props.navigation} changeScreen={ this.getCurrentScreen} /> :
                        this.state.screenNumber === 2 ?  <ResetPasswordScreen  changeScreen={ this.getCurrentScreen}/> :
                        <SuccessScreen navigation={this.props.navigation} />
                        }
                    </ScrollView>
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);