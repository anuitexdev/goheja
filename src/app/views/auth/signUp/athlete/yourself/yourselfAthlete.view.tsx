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
import TranslateService from '../../../../../services/translation.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

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
    currentLanguage: string,
    translateMethod: (str: string) => string,
}

class YourSelfAthleteScreen extends Component<Props, State> {
    private destroyed: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)

        this.state = {
            gender: 1,
            isDateTimePickerVisible: false,
            formatedBirthDate: '',
            birthDateError: false,
            genderError: false,
            dob: new Date(),
            currentLanguage: '',
            translateMethod: (str: string) => '',
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
        if (this.state.genderError || this.state.birthDateError) { return }
        const { isDateTimePickerVisible, birthDateError, genderError, formatedBirthDate, currentLanguage, ...basicData } = this.state;
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
        let genderValue = 0;
        if (value === this.state.translateMethod('translation.exposeIDE.views.regestration.male')) {
            genderValue = 1;
        }
        if (value === this.state.translateMethod('translation.exposeIDE.views.regestration.female')) {
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

    render() {
        const options = [
            this.state.translateMethod('translation.exposeIDE.views.regestration.male'),
            this.state.translateMethod('translation.exposeIDE.views.regestration.female'),
            "Neither"
        ];
        return (
            <Fragment>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>{this.state.translateMethod('translation.exposeIDE.views.regestration.tellUsAboutYourself')}</Text>


                        <View>
                            <View >
                                <Text style={styles.label}>Birth Day</Text>
                                <TouchableOpacity onPress={this.showDateTimePicker} style={styles.datePicker}>
                                    <TextInput
                                        placeholder={this.state.translateMethod('translation.exposeIDE.views.regestration.bithDatePlaceHolder')}
                                        style={!this.state.birthDateError ? this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput :
                                            this.state.currentLanguage !== 'Hebrew' ? styles.inputError : styles.inputHebError}
                                        editable={false}
                                        onFocus={this.showDateTimePicker}
                                        value={this.state.formatedBirthDate}
                                    ></TextInput>
                                    {this.state.birthDateError ? <Text style={styles.errorText}>This field is mandatory</Text> : null}
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
                                    <Text style={styles.label}>{this.state.translateMethod('translation.exposeIDE.views.regestration.gender')}</Text>
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
                                                ? this.state.translateMethod('translation.exposeIDE.views.regestration.male')
                                                : this.state.gender === 2
                                                    ? this.state.translateMethod('translation.exposeIDE.views.regestration.female')
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

                        <View style={styles.nextBtnWrapper}>
                            <TouchableOpacity
                                style={!this.state.birthDateError && !this.state.genderError ? styles.nextBtn : styles.nextBtnDisabled}
                                onPress={() => this.onSubmit()}
                            >
                                <Text style={styles.nextBtnText}>{this.state.translateMethod('translation.common.next')}</Text>
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