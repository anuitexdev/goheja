import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import {
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from './yourself.style';
import { SegmentedControls } from 'react-native-radio-buttons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import CustomDatePicker from '../../../../../components/datepicker/datepicker.component';
import moment from 'moment';
interface Props {
    changeCoachStep: (data: any) => void;
    state: any;
}

interface State {
    gender: number;
    isDateTimePickerVisible: boolean;
    formatedBirthDate: any;
    dob: any;
    birthDateError: boolean;
    genderError: boolean;
    height: number;
    weight: number;
    bodyfat: number;
    toggleDatePicker: boolean;
    valueOfDatePicker: string;
}

class YourSelfCoachScreen extends Component<Props, State> {
    private currentDate = new Date();
    constructor(props: Props) {
        super(props);

        this.state = {
            gender: 0,
            isDateTimePickerVisible: false,
            formatedBirthDate: '',
            birthDateError: false,
            genderError: false,
            dob: this.currentDate,
            height: 0,
            weight: 0,
            bodyfat: 0,
            toggleDatePicker: false,
            valueOfDatePicker: ''
        };
    }

    public showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    public hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    public handleDatePicked = (date: any) => {
        // const formattedDate = moment(date).format('DD-MM-YYYY');
        let signUpDate = moment(date).format('YYYY-MM-DDTHH:mm:ss:SSZ');
        this.setState({
            dob: signUpDate,
            birthDateError: false,
            formatedBirthDate: date,
            valueOfDatePicker: date,
        });
        this.hideDateTimePicker();
    };

    private onSubmit = async () => {
        await this.setState({
            genderError: this.state.gender === 0,
            birthDateError: this.state.dob === this.currentDate,
        });
        if (this.state.birthDateError || this.state.genderError) {
            return;
        }
        const {
            isDateTimePickerVisible,
            birthDateError,
            genderError,
            formatedBirthDate,
            toggleDatePicker,
            ...basicData
        } = this.state;
        this.props.changeCoachStep(basicData);
    };

    private setSelectedOption = (value: string) => {
        let genderValue = 0;
        if (value === 'Male') {
            genderValue = 1;
        }
        if (value === 'Female') {
            genderValue = 2;
        }
        if (value === 'Neither') {
            genderValue = 3;
        }
        if (value === 'Undefined') {
            genderValue = 4;
        }

        this.setState({
            genderError: false,
            gender: genderValue,
        });
    };

    public onInputChange = async (value: any) => {
        await this.setState({
            ...value,
        });
    };

    public showDatePicker = () => {
        this.setState({
            toggleDatePicker: true,
        });
    };

    public hideDatePicker = (visible: boolean) => {
        this.setState({
            toggleDatePicker: visible,
        });
    };

    // public setDatePickerValue = (value: any) => {
    //     this.setState({
    //         valueOfDatePicker: value
    //     })
    // }

    render() {
        const options = ['Male', 'Female', 'Neither'];
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>Tell us about {'\n'} yourself</Text>

                        <View>
                            <View>
                                <Text style={styles.label}>Birth Day</Text>
                                <TouchableOpacity
                                    onPress={this.showDatePicker}
                                    style={styles.datePicker}>
                                    <TextInput
                                        placeholder="Choose birth date…"
                                        style={
                                            this.state.birthDateError
                                                ? styles.inputError
                                                : styles.input
                                        }
                                        editable={false}
                                        onFocus={this.showDateTimePicker}
                                        value={this.state.valueOfDatePicker}></TextInput>
                                    <Icon
                                        style={styles.dateIcon}
                                        size={25}
                                        name={'ios-calendar'}
                                    />
                                </TouchableOpacity>
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                />
                                <CustomDatePicker
                                    toggleDatePicker={this.state.toggleDatePicker}
                                    hideDatePicker={this.hideDatePicker}
                                    setDatePickerValue={this.handleDatePicked}
                                />
                                {this.state.birthDateError ? (
                                    <Text style={styles.errorText}>This field is Mandatory</Text>
                                ) : null}
                            </View>
                            <View style={styles.genderField}>
                                <View style={styles.genderTitleContainer}>
                                    <Text style={styles.label}>Gender</Text>
                                    <TouchableOpacity
                                        style={styles.genderCheckBoxField}
                                        onPress={() => this.setSelectedOption('Undefined')}>
                                        <View
                                            style={
                                                this.state.genderError
                                                    ? styles.genderCheckBoxError
                                                    : styles.genderCheckBox
                                            }>
                                            {this.state.gender === 4 ? (
                                                <View style={styles.checkIcon}></View>
                                            ) : null}
                                        </View>
                                        <Text>I prefer not to say</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <SegmentedControls
                                        options={options}
                                        tint={'#99a8af'}
                                        selectedTint={'#fff'}
                                        backTint={'#fff'}
                                        selectedBackgroundColor={'#4D5A5F'}
                                        onSelection={this.setSelectedOption}
                                        containerBorderTint={
                                            this.state.genderError ? 'red' : '#cfd8dc'
                                        }
                                        separatorTint={this.state.genderError ? 'red' : '#cfd8dc'}
                                        selectedOption={
                                            this.state.gender === 1
                                                ? 'Male'
                                                : this.state.gender === 2
                                                    ? 'Female'
                                                    : this.state.gender === 3
                                                        ? 'Neither'
                                                        : null
                                        }
                                        optionStyle={{
                                            paddingBottom: 12,
                                            paddingTop: 12,
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                        }}
                                    />
                                    {this.state.genderError ? (
                                        <Text style={styles.errorText}>
                                            This field is Mandatory
                    </Text>
                                    ) : null}
                                </View>
                            </View>
                        </View>

                        <View style={styles.optionalContainer}>
                            <Text style={styles.optionalTitle}>
                                {' '}
                                Why do we need this info?{' '}
                            </Text>
                            <Text style={styles.optionalSubtitle}>
                                {' '}
                                If you want to have an athlete account on Go-Heja and {'\n'} not
                onle a couch account, fill the fields below.{' '}
                            </Text>

                            <View style={styles.personalFormControl}>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.labelText}>Height</Text>
                                    <Text style={styles.prompt}>(optional)</Text>
                                </View>
                                <View style={styles.formControl}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Type your height…"
                                        keyboardType="phone-pad"
                                        onChangeText={height => this.onInputChange({ height })}
                                    />
                                    <Text style={styles.formUnit}>CM</Text>
                                </View>
                            </View>

                            <View style={styles.personalFormControl}>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.labelText}>Weight</Text>
                                    <Text style={styles.prompt}>(optional)</Text>
                                </View>
                                <View style={styles.formControl}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Type your weight"
                                        keyboardType="phone-pad"
                                        onChangeText={weight => this.onInputChange({ weight })}
                                    />
                                    <Text style={styles.formUnit}>KG</Text>
                                </View>
                            </View>

                            <View style={styles.personalFormControl}>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.labelText}>Body bodyfat %</Text>
                                    <Text style={styles.prompt}>(optional)</Text>
                                </View>
                                <View style={styles.formControl}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Type your body bodyfat…"
                                        keyboardType="phone-pad"
                                        onChangeText={bodyfat => this.onInputChange({ bodyfat })}
                                    />
                                    <Text style={styles.formUnit}>%</Text>
                                </View>
                            </View>

                            <View style={styles.personalNextBtnWrapper}>
                                <TouchableOpacity
                                    style={styles.nextBtn}
                                    onPress={this.onSubmit}>
                                    <Text style={styles.nextBtnText}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: any) => ({
    state: state.AuthReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
    changeCoachStep: (data: any) => dispatch(actions.changeCoachStep(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(YourSelfCoachScreen);
