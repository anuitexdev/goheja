import { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Alert, Platform } from 'react-native';
import React from "react";
import styles from '../styles';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

import * as actions from '../../../redux/actions/auth.actions';
import UserSignInData from "src/app/shared/models/userSignInData.model";

import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Header from '../../../components/header/header';
import Icon from 'react-native-vector-icons/Ionicons';
import FbLogin from '../../../components/fbAuth/fbAuth';
import * as regExp from '../../../shared/validation/regexps';
import TranslateService from '../../../services/translation.service';
import SafeAreaView from 'react-native-safe-area-view';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

import ButtonSpinner from 'react-native-button-spinner';

interface State {
    email: string,
    password: string,
    showPassword: boolean,
    emailError: boolean,
    passwordError: boolean,
    currentLanguage: string,
    translateMethod: (str: string) => string;
}

interface ValidationObject {
    emailError: boolean,
    passwordError: boolean,
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    signIn: (user: UserSignInData) => void,
    isLogged: boolean,
    language: string,
}

class SignInScreen extends Component<Props, State> {

    private destroyed: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);
        this.state = {
            showPassword: true,
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            currentLanguage: '',
            translateMethod: (str: string) => '',
        }

    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.destroyed = new Subject();
        this.translationService.getCurrentLanguage().pipe(takeUntil(this.destroyed)).subscribe((res: any) => {
            this.setState({
                currentLanguage: res.language,
            })
        });

        this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
            this.setState({
                translateMethod: res,
            })
        });
    }

    componentWillUnmount() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    private onSubmit = async () => {
        await this.props.signIn({ mail: this.state.email, psw: this.state.password, specGroup: 'gohejacode' });


        if (this.props.isLogged) {
            this.props.navigation.navigate('Home');
        }
    }

    public signUpRedirect = () => {
        this.props.navigation.navigate('signUp');
    }

    public toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    public forgotPasswordRedirect = () => {
        this.props.navigation.navigate('forgotPassword');
    }
    public chartRedirect = () => {
        this.props.navigation.navigate('chart');
    }
    public d3chartRedirect = () => {
        this.props.navigation.navigate('test');
    }
    private handleChange = (data: any): void => {
        const errors = this.validateFields(data);
        const { type, ...signInData } = data;

        this.setState({
            ...signInData,
            ...errors,
        });
    }

    private validateFields = (data: any) => {
        let emailError = this.state.emailError;
        let passwordError = this.state.passwordError;

        if (data.type === 'email') {
            emailError = !regExp.mailReqExp.test(data.email);
        }
        if (data.type === 'password') {
            passwordError = data.password === '';
        }

        const validationObject: ValidationObject = {
            emailError,
            passwordError,
        }
        return validationObject;
    }

    render() {

        return (
            <ScrollView>
                {Platform.OS === 'android' ? <Header /> : null}
                <SafeAreaView
                    forceInset={{ top: 'always' }}
                    style={{ flex: 0 }}>
                    {/* <Header /> */}
                    <View style={styles.container}>
                        <Text style={styles.screenTitle}>{this.state.translateMethod('translation.exposeIDE.views.Login.buttonCaption')}</Text>
                        <View style={styles.formField}>
                            <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.Login.email')}</Text>
                            <TextInput
                                placeholder={this.state.translateMethod('translation.common.EmailPlaceHolder')}
                                style={!this.state.emailError ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                                    this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                                onChangeText={(email) => this.handleChange({ email, password: this.state.password, type: 'email' })}
                                keyboardType={'email-address'}
                                autoCapitalize="none"
                                value={this.state.email}
                            ></TextInput>
                        </View>
                        <View style={styles.formField}>
                            <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                            <TextInput
                                placeholder={this.state.translateMethod('translation.common.PasswordPlaceHolder')}
                                secureTextEntry={this.state.showPassword}
                                onChangeText={(password) => this.handleChange({ password, email: this.state.email, type: 'password' })}
                                style={!this.state.passwordError ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                                    this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
                                value={this.state.password}
                            />
                            <Icon
                                style={styles.showPassword}
                                size={25}
                                name={'ios-eye'}
                                onPress={this.toggleSwitch}
                            />
                        </View>
                        {
                            this.state.emailError || this.state.passwordError ?
                                <View style={styles.signInErrors}>
                                    <Text style={styles.textErrors}>
                                        {this.state.translateMethod('translation.exposeIDE.views.Login.messages.error')}
                                    </Text>
                                </View> : null
                        }
                        <View style={styles.links}>
                            <Text style={styles.forgotPasswordLink} onPress={this.forgotPasswordRedirect}>{this.state.translateMethod('translation.exposeIDE.views.Login.ForgotPasswordLink')}</Text>
                            {  // <TouchableOpacity
                                //     style={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === '' ? styles.signInBtn : styles.nextBtn}
                                //     onPress={this.onSubmit}
                                //     disabled={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === ''}>
                                //     <Text style={styles.signInText}>{this.state.translateMethod('translation.exposeIDE.views.Login.buttonCaption')}</Text>
                                // </TouchableOpacity> 
                            }
                            <ButtonSpinner

                                style={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === '' ? styles.signInBtn : styles.signInNextBtn}
                                // disabled={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === ''}
                                onPress={this.onSubmit}
                                positionSpinner={'centered-over-text'}
                            >
                                <Text style={styles.signInText}>{this.state.translateMethod('translation.exposeIDE.views.Login.buttonCaption')}</Text>
                            </ButtonSpinner>
                        </View>
                        <View style={styles.signUpRedirect}>
                            <Text style={styles.haveAccount}>{this.state.translateMethod('translation.exposeIDE.views.Login.Text')}</Text>
                            <Text style={styles.signUpLink} onPress={this.signUpRedirect}>{this.state.translateMethod('translation.exposeIDE.views.Login.signUpLink')}</Text>
                        </View>
                        <View style={styles.fbContainer}>
                            <FbLogin />
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => this.d3chartRedirect()}
                                style={{
                                    paddingTop: 20
                                }}
                            >
                                <Text> Redirect to chart Page</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
const mapStateToProps = (state: any) => ({
    isLogged: state.AuthReducer.isLogged,
    language: state.AuthReducer.language,
});

const mapDispatchToProps = (dispatch: any) => ({
    signIn: (userData: UserSignInData) => dispatch(actions.signIn(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);