import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import  styles from './sendMail.style';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import TranslateService from '../../../../services/translation.service';
import * as actions from '../../../../redux/actions/auth.actions';
import ValidationService from '../../../../shared/validation/validation.service';
import  AuthService from '../../../../services/auth.service';

interface State{
    email: string,
    emailError: boolean,
    translateMethod: (str: string) => string
}

interface Props{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    changeScreen: (screenNumber: number) => void,
    addEmail: (email:string) => void,
}

class SendMailScreen extends Component<Props,State> {
    private validationService = new ValidationService();
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService){
        super(props)

        this.state = {
            email: '',
            emailError: true,
            translateMethod: (str: string) => '',
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.setState({
                translateMethod: res,
            })
        });   
    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
    }

    private redirectToLogin = () => {
        this.props.navigation.navigate('signIn');
    }

    private handleChange = async (email: string) => {

       await this.setState({
            email,
            emailError: true
        })        
    }

    private onSubmit = async() => {
        const emailError = this.validationService.validateEmail(this.state.email);
        await this.setState({
            emailError,
        })
        AuthService.checkEmail({email: this.state.email});
        if(!this.state.emailError){ return;}

        this.props.addEmail(this.state.email);
        this.props.changeScreen(2);
    }

    render() {
        return (
            <Fragment>
                <Text style={styles.title}>  {this.state.translateMethod('translation.exposeIDE.views.forgot-password.title')}  </Text>
                <Text style = {styles.subTitle}>
                {this.state.translateMethod('translation.exposeIDE.views.forgot-password.text')}
            </Text>

                <View>
                    <Text style= {styles.label}> Your Email Address</Text>
                    <TextInput
                        placeholderTextColor={'#393838'}
                        placeholder={this.state.translateMethod('translation.exposeIDE.views.forgot-password.caption')}
                        style={!this.state.emailError ? styles.inputError : styles.input}
                        onChangeText = {(email: string) => this.handleChange(email)}
                        keyboardType={"email-address"}
                    />
                    {!this.state.emailError? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>

                <View style= {styles.links}>
                    <Text  
                    style={styles.loginLink}
                    onPress={this.redirectToLogin}
                    > {'<'} Back to login 
                    </Text>
                    <TouchableOpacity
                        onPress={this.onSubmit}
                        style ={styles.nextBtn}
                    >
                        <Text style={styles.resetPasswordText}>{this.state.translateMethod('translation.common.reset')} {this.state.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                    </TouchableOpacity>
                </View>
                </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    addEmail: (email: string) => dispatch(actions.addEmailToResetData(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMailScreen);