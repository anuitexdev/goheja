import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from '../../styles';
import { NavigationScreenProp, NavigationParams, NavigationState } from 'react-navigation';
import * as actions from '../../../../redux/actions/auth.actions';
import TranslateService from '../../../../services/translation.service';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    changeScreen: (role: number) => void
}

interface State {
    translateMethod: (str: string) => string,
}
class WelcomeScreen extends Component<Props, State> {

    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);
        this.translationService = new TranslateService();
        this.state = {
            translateMethod: (str: string) => '',
        }
    }

    componentWillMount = () => {
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.setState({
                translateMethod: res,
            })
        });
    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
    }

    public redirectToWelcome = (role: number) => {
        this.props.changeScreen(role);
        this.props.navigation.navigate('signUp');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.welcome')}</Text>

                <View style={styles.buttonVariants}>
                    <TouchableOpacity
                        style={styles.welcomeButtons}
                        onPress={() => this.redirectToWelcome(0)}>
                        <Text style={styles.buttonText}
                        >{this.state.translateMethod('translation.exposeIDE.views.regestration.imCoach')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.welcomeButtons}
                        onPress={() => this.redirectToWelcome(1)}>
                        <Text style={styles.buttonText}
                        >{this.state.translateMethod('translation.exposeIDE.views.regestration.imAthlete')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.accountContainer}>
                    <Text style={styles.haveAccount}>
                        Already got a Go-heja account?
                </Text>
                    <TouchableOpacity>
                        <Text style={styles.loginButton} onPress={this.signInRedirect}>{this.state.translateMethod('translation.exposeIDE.views.Login.buttonCaption')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    public signInRedirect = () => {
        this.props.navigation.navigate('signIn');
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    changeScreen: (role: number) => dispatch(actions.changeScreen(role))
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);