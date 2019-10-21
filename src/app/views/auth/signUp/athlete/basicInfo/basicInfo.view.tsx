import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';
import ValidationService from '../../../../../shared/validation/validation.service'
import TranslateService from '../../../../../services/translation.service';
import { ScrollView } from "react-native-gesture-handler";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

interface State {
    firstname: string,
    lastName: string,
    auth: string,
    password: string,
    confirmPassword: string,
    showPassword: boolean,
    translateMethod: (str: string) => string;
    errors: {
        auth: boolean,
        firstname: boolean,
        lastName: boolean,
        password: boolean,
        confirmPassword: boolean,
        formError: boolean,
    },
    currentLanguage: string,
}

interface Props {
    currentStep: number;
    signUp: (user: UserSignUpData) => void
    nextStepNumber: (nextStepData: any) => void,
}

class BasicInfoAthleteScreen extends Component<Props, State> {

    private validationService = new ValidationService();
    private destroyed:any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);

        this.state = {
            firstname: '',
            lastName: '',
            auth: '',
            confirmPassword: '',
            password: '',
            showPassword: true,
            translateMethod: (str: string) => '',
            errors: {
                auth: false,
                firstname: false,
                lastName: false,
                password: false,
                confirmPassword: false,
                formError: false,
            },
            currentLanguage: '',
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.destroyed = new Subject();
         this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe((res: any) => {
            this.setState({
                translateMethod: res,
            })
        });

         this.translationService.getCurrentLanguage().pipe(takeUntil(this.destroyed)).subscribe((res: any) => {
            this.setState({
                currentLanguage: res.language,
            })
        });
    }

    componentWillUnmount = () => {
        this.destroyed.next();
        this.destroyed.complete();

    }

    private toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    private onSubmit = async () => {
        const validationError = this.validationService.signUpAthleteValidation(this.state.auth, this.state.password, this.state.firstname, this.state.lastName, this.state.confirmPassword);

        await this.setState({
            errors: {
                auth: validationError.mailError,
                password: validationError.passwordError,
                firstname: validationError.fNameError,
                lastName: validationError.lNameError,
                confirmPassword: validationError.confPassError,
                formError: validationError.formError,
            }
        });
        if (this.state.errors.formError) { return }
        const { showPassword, errors, confirmPassword, currentLanguage,translateMethod, ...basicData } = this.state;
        this.props.nextStepNumber(basicData);
    }

    private handleChange = async (data: any) => {

        let key = Object.keys(data)[0];
        let newValidationObject = this.state.errors;
        newValidationObject[key] = false;

        this.setState({
            ...data,
            errors: {
                ...newValidationObject,
            }
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <Text style={styles.screenTitle}>{this.state.translateMethod('translation.exposeIDE.views.regestration.yourBasicInfo')}</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.regestration.firstNameTitle')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.exposeIDE.views.regestration.firstNamePlaceholder')}
                        style={!this.state.errors.firstname ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                        onChangeText={(firstname) => this.handleChange({ firstname })}
                    ></TextInput>
                    {this.state.errors.firstname ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.regestration.lasttNameTitle')}</Text>
                    <TextInput
                        placeholder='Type your last name'
                        style={!this.state.errors.lastName ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                        onChangeText={(lastName) => this.handleChange({ lastName })}
                    ></TextInput>
                    {this.state.errors.lastName ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.Login.email')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.common.EmailPlaceHolder')}
                        style={!this.state.errors.auth ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                            keyboardType={'email-address'}
                        onChangeText={(auth) => this.handleChange({ auth })}
                        keyboardType={"email-address"}
                    ></TextInput>
                    {this.state.errors.auth ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.common.PasswordPlaceHolder')}
                        secureTextEntry={this.state.showPassword}
                        style={!this.state.errors.password ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
                        onChangeText={(password) => this.handleChange({ password })}
                    />
                    {this.state.errors.password ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                    <Icon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.common.confirm')} {this.state.translateMethod('translation.common.password')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.common.PasswordPlaceHolder')}
                        secureTextEntry={this.state.showPassword}
                        style={!this.state.errors.confirmPassword ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
                        onChangeText={(confirmPassword) => this.handleChange({ confirmPassword })}
                    />
                    {this.state.errors.confirmPassword ? <Text style={styles.errorText}>Your Password does not match</Text> : null}
                    <Icon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.nextBtnWrapper}>
                    <TouchableOpacity
                        style={styles.nextBtn}
                        onPress={this.onSubmit}
                    >
                        <Text style={styles.nextBtnText}>{this.state.translateMethod('translation.common.next')}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currentStep: state.AuthReducer.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (userData: UserSignUpData) => dispatch(actions.signUp(userData)),
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoAthleteScreen);