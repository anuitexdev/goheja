import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SegmentedControls } from 'react-native-radio-buttons';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as actions from '../../../../../redux/actions/auth.actions';
import moment from 'moment';
import AuthReducer from '../../../../../redux/reducers/auth.reducer';

interface Props {
    nextStepNumber: (nextStepNumber: any) => void,
    state: any,
}

interface State {
    gender: string,
    isDateTimePickerVisible: boolean,
    birthDate: any,
    birthDateError: boolean,
    genderError: boolean,
}

class YourSelfAthleteScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            gender: 'Male',
            isDateTimePickerVisible: false,
            birthDate: '',
            birthDateError: false,
            genderError: false,
        }
        console.log(this.props.state);
        
    }

    public showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    public hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    public handleDatePicked = (date: Date) => {
        const formattedDate = moment(date).format('DD-MM-YYYY');

        const birthDateError = this.birthDateValidation(formattedDate);

        this.setState({
            birthDate: formattedDate,
            birthDateError
        })
        this.hideDateTimePicker();
    };

    private onSubmit = () => {
        const { isDateTimePickerVisible, birthDateError, genderError, ...basicData } = this.state;
        this.props.nextStepNumber(basicData);
    }

    private birthDateValidation(value: string) {
        if (value !== '') {
            return true;
        };
        return false;
    }

    private genderValidation(value: string) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    private setSelectedOption = (value: string) => {

        const genderError = this.genderValidation(value);
        this.setState({
            genderError,
            gender: value,
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
                                        style={styles.input}
                                        editable={false}
                                        onFocus={this.showDateTimePicker}
                                        value={this.state.birthDate}
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
                                        containerBorderTint={'#cfd8dc'}
                                        separatorTint={'#cfd8dc'}
                                        selectedOption={this.state.gender}
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
                                style={this.state.birthDateError && this.state.genderError ? styles.nextBtn : styles.nextBtnDisabled}
                                disabled={!this.state.birthDateError && !this.state.genderError}
                                onPress={this.onSubmit}
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
    nextStepNumber: (nextStepNumber: number) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(YourSelfAthleteScreen);