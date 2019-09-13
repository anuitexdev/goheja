import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SegmentedControls } from 'react-native-radio-buttons';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepNumber: number) => void,
}

interface State {
    selectedOption: string,
    isDateTimePickerVisible: boolean,
    birthDate: any
}

class YourSelfAthleteScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            selectedOption: '',
            isDateTimePickerVisible: false,
            birthDate: ''
        }
    }

    public showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    public hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    public handleDatePicked = (date: Date) => {
        this.setState({
            birthDate: date,
        })
        this.hideDateTimePicker();
    };

    private onSubmit = () => {
        this.props.nextStepNumber(3);
    }

    private setSelectedOption(value: any) {
        console.log(value);

    }

    render() {
        const options = [
            "Male",
            "Female"
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
                                        onSelection={this.setSelectedOption.bind(this)}
                                        containerBorderTint={'#cfd8dc'}
                                        separatorTint={'#cfd8dc'}
                                        optionStyle={{
                                            paddingBottom: 12,
                                            paddingTop: 12,
                                            paddingLeft: 48,
                                            paddingRight: 48,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.nextBtnWrapper}>
                            <TouchableOpacity style={styles.nextBtn} onPress={this.onSubmit}>
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

});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepNumber: number) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(YourSelfAthleteScreen);