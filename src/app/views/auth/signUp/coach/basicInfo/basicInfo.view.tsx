import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './basicInfo.style';
import IconIon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';
import RNPickerSelect from 'react-native-picker-select';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import window from '../../../../../theme/variables';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import ValidationService from '../../../../../shared/validation/validation.service';
import { countries } from '../../../../../shared/helpers/countryWithCodes.list';
import TranslateService from '../../../../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


interface State {
    firstname: string;
    lastName: string;
    auth: string;
    phone: string;
    countryCode: string;
    password: string;
    confirmPassword: string;
    showPassword: boolean;
    updatedPhoneValue: string;
    validationObject: any,
    currentLanguage: string,
    translateMethod: (str: string) => string,
}

interface Props {
    signUp: (user: UserSignUpData) => void;
    changeCoachStep: (data: any) => void;
}

class CoachBasicInfoScreen extends Component<Props, State> {

    private validationService = new ValidationService();
    private destroyed: any;
    private phone: any;
    private countryPicker: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);

        this.state = {
            firstname: '',
            lastName: '',
            auth: '',
            phone: '',
            countryCode: '+1',
            password: '',
            confirmPassword: '',
            updatedPhoneValue: '',
            translateMethod: (str: string) => '',
            validationObject: {
                firstname: false,
                lastName: false,
                auth: false,
                phone: false,
                password: false,
                confirmPassword: false,
                formError: false,

            },
            showPassword: true,
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
    };

    private onSubmit = async () => {
        // await this.setState({
        //     phone: this.state.updatedPhoneValue + this.state.phone,
        // });
        const { showPassword, validationObject, updatedPhoneValue, currentLanguage, translateMethod, ...userDto } = this.state;
        const newValidationObject = this.validationService.validateBasicInfoForm(userDto);

        await this.setState({
            validationObject: {
                ...newValidationObject,
            }
        })

        if (this.state.validationObject.formError) { return; }
        const { confirmPassword, ...basicData } = userDto;
        await this.props.changeCoachStep(basicData);
    }

    private handleChange = (data: any) => {

        let key = Object.keys(data)[0];
        let newValidationObject = this.state.validationObject;
        newValidationObject[key] = false;

        this.setState({
            ...data,
            validationObject: {
                ...newValidationObject,
            }
        });

    };
    private setCountry = (country: string) => {
        const countryCode = this.phone.getCountryCode(country)
        this.setState({
            countryCode: `+${countryCode}`
        })
    };
    private setPhoneNumber = (number: number) => {
        let phoneNumber =+ number.toString();
        this.setState({
            phone: `+${phoneNumber}`
        })
        console.log(this.state.phone);
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>{this.state.translateMethod('translation.exposeIDE.views.regestration.yourBasicInfo')}</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.regestration.firstNameTitle')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.exposeIDE.views.regestration.firstNamePlaceholder')}
                        value={this.state.firstname}
                        style={!this.state.validationObject.firstname ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                        onChangeText={firstname =>
                            this.handleChange({ firstname })
                        }></TextInput>
                    {this.state.validationObject.firstname ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.regestration.lasttNameTitle')}</Text>
                    <TextInput
                        value={this.state.lastName}
                        placeholder="Type your last name..."
                        style={!this.state.validationObject.lastName ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                        onChangeText={lastName =>
                            this.handleChange({ lastName })
                        }></TextInput>
                    {this.state.validationObject.lastName ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.Login.email')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.common.EmailPlaceHolder')}
                        value={this.state.auth}
                        style={!this.state.validationObject.auth ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInputDefault :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebErrorDefault}
                        onChangeText={auth => this.handleChange({ auth })}></TextInput>
                    {this.state.validationObject.auth ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                </View>
                <Text style={styles.label}>Phone No.</Text>
                <View style={styles.formField}>
                    <View style={styles.phoneInput}>
                        <PhoneInput 
                            ref={ref => {
                                this.phone = ref
                            }}
                            value={this.state.countryCode}
                            onSelectCountry={(country: string) => {this.setCountry(country)}}
                            onChangePhoneNumber={(number: number) => {this.setPhoneNumber(number)}}
                        />
                        {/* <RNPickerSelect
                            onValueChange={value => this.setState({ updatedPhoneValue: value })}
                            items={countries}
                        >
                            <View
                                style={this.state.validationObject.phone ? styles.phoneSelectError : styles.phoneSelect}>
                                <Text style={{ color: '#282E44' }}>
                                    {this.state.updatedPhoneValue}
                                </Text>
                                <IconMat
                                    style={styles.arrowDropDown}
                                    size={30}
                                    name={'arrow-drop-down'}
                                />
                            </View>
                        </RNPickerSelect>
                        <Text style={{ fontSize: 24 }}>{'\u00A0'}-{'\u00A0'}</Text>
                        <TextInput
                            placeholder="Type your phone no..."
                            keyboardType={'number-pad'}
                            value={this.state.phone}
                            style={this.state.validationObject.phone ? this.state.currentLanguage !== 'Hebrew' ? [styles.inputError, { width: window.width - 160 }] : [styles.inputErrorHeb, { width: window.width - 160 }] : this.state.currentLanguage !== 'Hebrew' ? [styles.input, { width: window.width - 160 }] : [styles.inputHeb, { width: window.width - 160 }]}
                            onChangeText={phone => this.handleChange({ phone })}></TextInput> */}
                    </View>
                    {/* {this.state.validationObject.phone ? <Text style={styles.errorText}>This field is mandatory</Text> : null} */}
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.common.PasswordPlaceHolder')}
                        secureTextEntry={this.state.showPassword}
                        value={this.state.password}
                        style={!this.state.validationObject.password ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
                        onChangeText={password => this.handleChange({ password })}
                    />
                    {this.state.validationObject.password ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                    <IconIon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Password Confirmation</Text>
                    <TextInput
                        placeholder={this.state.translateMethod('translation.common.PasswordPlaceHolder')}
                        secureTextEntry={this.state.showPassword}
                        value={this.state.confirmPassword}
                        style={!this.state.validationObject.confirmPassword ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
                        onChangeText={confirmPassword =>
                            this.handleChange({ confirmPassword })
                        }
                    />
                    {this.state.validationObject.confirmPassword ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
                    <IconIon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.nextBtnWrapper}>
                    <TouchableOpacity style={styles.nextBtnActive} onPress={this.onSubmit}>
                        <Text style={styles.nextBtnText}>{this.state.translateMethod('translation.common.next')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (userData: UserSignUpData) => dispatch(actions.signUp(userData)),
    changeCoachStep: (data: any) => dispatch(actions.changeCoachStep(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoachBasicInfoScreen);
