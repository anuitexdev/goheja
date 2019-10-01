import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';
import TranslateService from '../../../../../services/translation.service';

interface Props {
    nextStepNumber: (nextStepData: any) => void,
    signUp: (data: any) => void,
    signUpData: any,
    userType: number,
}

interface State {
    height: number,
    weight: number,
    fat: number,
    signUpData: any,

}


class PersonalInfoScreen extends Component<Props, State> {
    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)

        this.state = {
            height: 0,
            weight: 0,
            fat: 0,
            signUpData: this.props.signUpData,

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

    public onInputChange = async (value: any) => {
        await this.setState({
            ...value,
        });
    }

    public onSubmit = async () => {
        this.props.nextStepNumber(this.state);
        await this.setState({
            signUpData: {
                ...this.state.signUpData,
                height: this.state.height,
                weight: this.state.weight,
                fat: this.state.fat,
                userType: this.props.userType,
            }
        });
        this.props.signUp(this.state.signUpData);
    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.pageHeader}>Personal information</Text>


                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>{this.translateMethod('translation.exposeIDE.views.regestration.height')}</Text>
                                <Text style={styles.prompt}>({this.translateMethod('translation.common.optional')})</Text>
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
                                <Text style={styles.labelText}>{this.translateMethod('translation.exposeIDE.views.regestration.weight')}</Text>
                                <Text style={styles.prompt}>({this.translateMethod('translation.common.optional')})</Text>
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
                                <Text style={styles.labelText}>{this.translateMethod('translation.exposeIDE.views.regestration.BofyFatPercentage')} %</Text>
                                <Text style={styles.prompt}>({this.translateMethod('translation.common.optional')})</Text>
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
                                style={styles.skipWrapper}
                                onPress={this.onSubmit}
                            >
                                <Text>{this.translateMethod('translation.common.skip')} ></Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.nextBtn}
                                onPress={this.onSubmit}
                            >
                                <Text style={styles.nextBtnText}>{this.translateMethod('translation.common.next')}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    signUpData: state.AuthReducer.signUpData,
    userType: state.AuthReducer.userType
});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData)),
    signUp: (data: any) => dispatch(actions.signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);