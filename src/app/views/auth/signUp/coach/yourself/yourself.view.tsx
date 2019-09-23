import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './yourself.style';
import { SegmentedControls } from 'react-native-radio-buttons';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as actions from '../../../../../redux/actions/auth.actions';
import moment from 'moment';

interface Props {
    changeCoachStep: (data: any) => void,
    state: any,
}

interface State {
    gender: number,
    isDateTimePickerVisible: boolean,
    formatedBirthDate: any,
    dob: any,
    birthDateError: boolean,
    genderError: boolean,
    height: number,
    weight: number,
    fat: number,
}

class YourSelfCoachScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            gender: 0,
            isDateTimePickerVisible: false,
            formatedBirthDate: '',
            birthDateError: false,
            genderError: false,
            dob: new Date(),
            height: 0,
            weight: 0,
            fat: 0,
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

        const birthDateError = this.birthDateValidation(formattedDate);
        let signUpDate = moment(date).format('YYYY-MM-DDTHH:mm:ss:SSZ')
        this.setState({
            dob: signUpDate,
            birthDateError,
            formatedBirthDate: formattedDate,
        })
        this.hideDateTimePicker();
    };

    private onSubmit = () => {
        const { isDateTimePickerVisible, birthDateError, genderError,formatedBirthDate, ...basicData } = this.state;
        this.props.changeCoachStep(basicData);
    }

    private birthDateValidation(value: string) {
        if (value !== '') {
            return true;
        };
        return false;
    }

    private genderValidation(value: number) {
        if (value !== 0) {
            return true;
        }
        return false;
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

        const genderError = this.genderValidation(genderValue);
        this.setState({
            genderError,
            gender: genderValue,
        });
    }

    public onInputChange = async (value: any) => {
        await this.setState({
            ...value,
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
                        <Text style={styles.pageHeader}>Tell us about {'\n'} yourself</Text>


                        <View>
                            <View >
                                <Text style={styles.label}>Birth Day</Text>
                                <TouchableOpacity onPress={this.showDateTimePicker} style={styles.datePicker}>
                                    <TextInput
                                        placeholder='Choose birth date…'
                                        style={styles.input}
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
                            <View style={styles.genderTitleContainer}>
                                <Text style={styles.label}>Gender</Text>
                                <TouchableOpacity style={styles.genderCheckBoxField}>
                                <View style={styles.genderCheckBox}></View>                            
                                <Text>I prefer not to say</Text>
                                </TouchableOpacity>

                                </View>
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

                

                        <View style={styles.optionalContainer}>

                        <Text style={styles.optionalTitle}> Why do we need this info? </Text>
                        <Text style={styles.optionalSubtitle}> If you want to have an athlete account on Go-Heja and {'\n'} not onle a couch account, fill the fields below. </Text>


                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Height</Text>
                                <Text style={styles.prompt}>(optional)</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Type your height…'
                                    keyboardType='phone-pad'
                                    onChangeText={(height) => this.onInputChange({ height })}
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
                                    placeholder='Type your weight'
                                    keyboardType='phone-pad'
                                    onChangeText={(weight) => this.onInputChange({ weight })}
                                />
                                <Text style={styles.formUnit}>KG</Text>
                            </View>
                        </View>

                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Body fat %</Text>
                                <Text style={styles.prompt}>(optional)</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Type your body fat…'
                                    keyboardType='phone-pad'
                                    onChangeText={(fat) => this.onInputChange({ fat })}
                                />
                                <Text style={styles.formUnit}>%</Text>
                            </View>
                        </View>

                        <View style={styles.personalNextBtnWrapper}>
                            <TouchableOpacity
                                style={styles.nextBtn}
                                onPress={this.onSubmit}
                            >
                                <Text style={styles.nextBtnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
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
    changeCoachStep: (data: any) => dispatch(actions.changeCoachStep(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(YourSelfCoachScreen);