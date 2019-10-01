import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
import styles from './basicInfo.style';
import IconIon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';
import RNPickerSelect from 'react-native-picker-select';
import window from '../../../../../theme/variables';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import ValidationService from '../../../../../shared/validation/validation.service';
import { countries } from '../../../../../shared/helpers/countryWithCodes.list';
import TranslateService from '../../../../../services/translation.service';


interface State {
    firstname: string;
    lastName: string;
    auth: string;
    phone: string;
    password: string;
    confirmPassword: string;
    showPassword: boolean;
    updatedPhoneValue: string;
    validationObject: any
}

interface Props {
    signUp: (user: UserSignUpData) => void;
    changeCoachStep: (data: any) => void;
}

class CoachBasicInfoScreen extends Component<Props, State> {

    private validationService = new ValidationService();
    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);

        this.state = {
            firstname: '',
            lastName: '',
            auth: '',
            phone: '',
            password: '',
            confirmPassword: '',
            updatedPhoneValue: '',
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
        }
    }


    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res});   
    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
    }

    private toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    private onSubmit = async () => {
        await this.setState({
        phone: this.state.updatedPhoneValue + this.state.phone,
        });
        const { showPassword, validationObject, updatedPhoneValue, ...userDto } = this.state;
        const newValidationObject = this.validationService.validateBasicInfoForm(userDto);
        
        await this.setState({
            validationObject: {
                ...newValidationObject,
            }
        })
        
        if (this.state.validationObject.formError) { return; }
        const {confirmPassword , ...basicData} = userDto;
        await this.props.changeCoachStep(basicData);
    }

    private handleChange =  (data: any) => {
        
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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>{this.translateMethod('translation.exposeIDE.views.regestration.yourBasicInfo')}</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.translateMethod('translation.exposeIDE.views.regestration.firstNameTitle')}</Text>
                    <TextInput
                        placeholder={this.translateMethod('translation.exposeIDE.views.regestration.firstNamePlaceholder')}
                        value ={this.state.firstname}
                        style={ this.state.validationObject.firstname ? styles.inputError : styles.input}
                        onChangeText={firstname =>
                            this.handleChange({ firstname })
                        }></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.translateMethod('translation.exposeIDE.views.regestration.lasttNameTitle')}</Text>
                    <TextInput
                        value ={this.state.lastName}
                        placeholder="Type your last name..."
                        style={this.state.validationObject.lastName ? styles.inputError : styles.input}
                        onChangeText={lastName =>
                            this.handleChange({ lastName })
                        }></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>{this.translateMethod( 'translation.exposeIDE.views.Login.email')}</Text>
                    <TextInput
                        placeholder={this.translateMethod('translation.common.EmailPlaceHolder')}
                        value ={this.state.auth}
                        style={this.state.validationObject.auth ? styles.inputError : styles.input }
                        onChangeText={auth => this.handleChange({ auth })}></TextInput>
                </View>
                <Text style={styles.label}>Phone No.</Text>
                <View style={styles.formField}>
                    <View style={styles.phoneInput}>
                        <RNPickerSelect
                            onValueChange={value => this.setState({ updatedPhoneValue: value })}
                            items={countries}
                        >
                            <View
                                style={this.state.validationObject.phone ? styles.phoneSelectError:  styles.phoneSelect}>
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
                            value ={this.state.phone}
                            style={this.state.validationObject.phone ? [styles.inputError, { width: window.width - 160 }] : [styles.input, { width: window.width - 160 }]}
                            onChangeText={phone => this.handleChange({ phone })}></TextInput>
                    </View>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>{this.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                    <TextInput
                        placeholder={this.translateMethod('translation.common.PasswordPlaceHolder')}
                        secureTextEntry={this.state.showPassword}
                        value ={this.state.password}
                        style={this.state.validationObject.password ? styles.inputError : styles.input}
                        onChangeText={password => this.handleChange({ password })}
                    />
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
                        placeholder={this.translateMethod('translation.common.PasswordPlaceHolder')}
                        secureTextEntry={this.state.showPassword}
                        value={this.state.confirmPassword}
                        style={this.state.validationObject.confirmPassword ? styles.inputError : styles.input}
                        onChangeText={confirmPassword =>
                            this.handleChange({ confirmPassword })
                        }
                    />
                    <IconIon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.nextBtnWrapper}>
                    <TouchableOpacity style={styles.nextBtnActive} onPress={this.onSubmit}>
                        <Text style={styles.nextBtnText}>{this.translateMethod('translation.common.next')}</Text>
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
