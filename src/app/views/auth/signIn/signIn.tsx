import { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Alert } from 'react-native';
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

interface State {
    email: string,
    password: string,
    showPassword: boolean,
    emailError: boolean,
    passwordError: boolean,
    currentLanguage: string,

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

private translateMethod: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);
        this.state = {
            showPassword: true,
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            currentLanguage: '',
        }
       
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.translationService.getCurrentLanguage().subscribe(res=>{
             this.setState({
                 currentLanguage: res.language,
             })
            });
        
        this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res});   
    }

    private onSubmit = async () => {
        await this.props.signIn({ mail: this.state.email, psw: this.state.password, specGroup: 'gohejacode' });

        if (!this.props.isLogged) {
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
                <Header />
                <View style={styles.container}>
                    <Text style={styles.screenTitle}>{this.translateMethod('translation.exposeIDE.views.Login.buttonCaption')}</Text>
                    <View style={styles.formField}>
                        <Text style={styles.label}>{this.translateMethod( 'translation.exposeIDE.views.Login.email')}</Text>
                        <TextInput
                            placeholder={this.translateMethod('translation.common.EmailPlaceHolder')}
                            style={!this.state.emailError ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                            onChangeText={(email) => this.handleChange({ email, password: this.state.password, type: 'email' })}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>{this.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                        <TextInput
                            placeholder={this.translateMethod('translation.common.PasswordPlaceHolder')}
                            secureTextEntry={this.state.showPassword}
                            onChangeText={(password) => this.handleChange({ password, email: this.state.email, type: 'password' })}
                            style={!this.state.passwordError ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                             this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
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
                                  {this.translateMethod('translation.exposeIDE.views.Login.messages.error')}
                        </Text>
                            </View> : null
                    }
                    <View style={styles.links}>
                        <Text style={styles.forgotPasswordLink} onPress={this.forgotPasswordRedirect}>{this.translateMethod('translation.exposeIDE.views.Login.ForgotPasswordLink')}</Text>
                        <TouchableOpacity
                            style={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === '' ? styles.signInBtn : styles.nextBtn}
                            onPress={this.onSubmit}
                            disabled={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === ''}>
                            <Text style={styles.signInText}>{this.translateMethod('translation.exposeIDE.views.Login.buttonCaption')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUpRedirect}>
                        <Text style={styles.haveAccount}>{this.translateMethod('translation.exposeIDE.views.Login.Text')}</Text>
                        <Text style={styles.signUpLink} onPress={this.signUpRedirect}>{this.translateMethod('translation.exposeIDE.views.Login.signUpLink')}</Text>
                    </View>
                    <View style={styles.fbContainer}>
                    <FbLogin />
                    </View>

                </View>
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