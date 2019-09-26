import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './yourself.styles';
import { SegmentedControls } from 'react-native-radio-buttons';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as actions from '../../../../../redux/actions/auth.actions';
import moment from 'moment';

interface Props {
    nextStepNumber: (nextStepData: any) => void,
    state: any,
}

interface State {
    gender: number,
    isDateTimePickerVisible: boolean,
    formatedBirthDate: any,
    dob: any,
    birthDateError: boolean,
    genderError: boolean,
}

class YourSelfAthleteScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            gender: 0,
            isDateTimePickerVisible: false,
            formatedBirthDate: '',
            birthDateError: false,
            genderError: false,
            dob: new Date(),
        }        
    }

    public showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    public hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    public handleDatePicked = (date: Date) => {
        const formattedDate = moment(date).format('DD-MM-YYYY');
        this.setState({
            birthDateError: false,
        })
        let signUpDate = moment(date).format('YYYY-MM-DDTHH:mm:ss:SSZ')
        this.setState({
            dob: signUpDate,
            formatedBirthDate: formattedDate,
        })
        this.hideDateTimePicker();
    };

    private onSubmit = async () => {        
        const genderErrorValue = this.genderValidation(this.state.gender);
        const birthDateErrorValue = this.birthDateValidation(this.state.formatedBirthDate);

        await this.setState({
            birthDateError: birthDateErrorValue,
            genderError: genderErrorValue,
        });
        if(this.state.genderError || this.state.birthDateError) {return}
        const { isDateTimePickerVisible, birthDateError, genderError ,formatedBirthDate, ...basicData } = this.state;
        this.props.nextStepNumber(basicData);
    }

    private birthDateValidation(value: string) {
        if (value !== '') {
            return false;
        };
        return true;
    }

    private genderValidation(value: number) {
        if (value !== 0) {
            return false;
        }
        return true;
    }

    private setSelectedOption = (value: string) => {
        let genderValue= 0;
        if (value === 'Male') {
            genderValue = 1;
        } 
        if(value === 'Female') {
            genderValue = 2;
        }
        if(value === 'Neither') {
            genderValue = 3;
        }
        this.setState({
            genderError: false,
        })
        this.setState({
            gender: genderValue,
        });
    }

    render() {
        const options = [
            "Male",
            "Female",
            "Neither"
        ];
        return (
            <Fragment>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>Tell us about yourself</Text>


                        <View>
                            <View >
                                <Text style={styles.label}>Birth Day</Text>
                                <TouchableOpacity onPress={this.showDateTimePicker} style={styles.datePicker}>
                                    <TextInput
                                        placeholder='Choose birth date…'
                                        style={this.state.birthDateError ? styles.inputError : styles.input}
                                        editable={false}
                                        onFocus={this.showDateTimePicker}
                                        value={this.state.formatedBirthDate}
                                    ></TextInput>
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
                            </View>
                            <View style={styles.genderField}>
                                <Text style={styles.label}>Gender</Text>
                                <View >
                                    <SegmentedControls
                                        options={options}
                                        tint={'#99a8af'}
                                        selectedTint={'#fff'}
                                        backTint={'#fff'}
                                        selectedBackgroundColor={'#4D5A5F'}
                                        onSelection={this.setSelectedOption}
                                        containerBorderTint={this.state.genderError ? 'red' :  '#cfd8dc'}
                                        separatorTint={'#cfd8dc'}
                                        selectedOption={this.state.gender === 1 ? 'Male' : this.state.gender === 2 ? 'Female' : this.state.gender === 3 ? 'Neither': 'Male'}
                                        optionStyle={{ 
                                            paddingBottom: 12,
                                            paddingTop: 12,
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.nextBtnWrapper}>
                            <TouchableOpacity
                                style={!this.state.birthDateError && !this.state.genderError ? styles.nextBtn : styles.nextBtnDisabled}
                                onPress={() => this.onSubmit()}
                            >
                                <Text style={styles.nextBtnText}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    state: state.AuthReducer,

});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData))
});

export default connect(mapStateToProps, mapDispatchToProps)(YourSelfAthleteScreen);