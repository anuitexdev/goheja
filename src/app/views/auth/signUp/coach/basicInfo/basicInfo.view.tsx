import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
import styles from './styles';
import IconIon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';
import RNPickerSelect from 'react-native-picker-select';
import window from '../../../../../theme/variables';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import ValidationService from '../../../../../shared/validation/validation.service';
import { countries } from '../../../../../shared/helpers/country.list';


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

    constructor(props: Props) {
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

    private toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    private onSubmit = async () => {
        const { showPassword, validationObject, updatedPhoneValue, confirmPassword, ...userDto } = this.state;
        const newValidationObject = this.validationService.validateBasicInfoForm(userDto);
        await this.setState({
            validationObject: {
                ...newValidationObject,
            }
        })
        // console.log(this.state.validationObject);
        
        // if (this.state.validationObject.formError) { return }
        await this.props.changeCoachStep(userDto);
    }

    private handleChange = (data: any) => {
        this.setState(data);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Your basic info</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        placeholder="Type your first name..."
                        style={styles.input}
                        onChangeText={firstname =>
                            this.handleChange({ firstname })
                        }></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        placeholder="Type your last name..."
                        style={styles.input}
                        onChangeText={lastName =>
                            this.handleChange({ lastName })
                        }></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Type your email address..."
                        style={styles.input}
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
                                style={styles.phoneSelect}>
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
                            style={[styles.input, { width: window.width - 160 }]}
                            onChangeText={phone => this.handleChange({ phone })}></TextInput>
                    </View>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Type your password..."
                        secureTextEntry={this.state.showPassword}
                        style={styles.input}
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
                        placeholder="Type your password..."
                        secureTextEntry={this.state.showPassword}
                        style={styles.input}
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
                    <TouchableOpacity style={styles.nextBtn} onPress={this.onSubmit}>
                        <Text style={styles.nextBtnText}>Next</Text>
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
