import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';
import TranslateService from '../../../../../services/translation.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

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
    currentLanguage: string,
    translateMethod: (str: string) => string;

}


class PersonalInfoScreen extends Component<Props, State> {
    private destroyed:any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)

        this.state = {
            height: 0,
            weight: 0,
            fat: 0,
            signUpData: this.props.signUpData,
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
        this.props.signUp({...this.state.signUpData,userType: this.props.userType });
    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.pageHeader}>Personal information</Text>


                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>{this.state.translateMethod('translation.exposeIDE.views.regestration.height')}</Text>
                                <Text style={styles.prompt}>({this.state.translateMethod('translation.common.optional')})</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput}
                                    placeholder='Type your height…'
                                    keyboardType='phone-pad'
                                    onChangeText={(height) => this.onInputChange({ height })}
                                />
                                <Text style={styles.formUnit}>CM</Text>
                            </View>
                        </View>

                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>{this.state.translateMethod('translation.exposeIDE.views.regestration.weight')}</Text>
                                <Text style={styles.prompt}>({this.state.translateMethod('translation.common.optional')})</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput}
                                    placeholder='Type your weight'
                                    keyboardType='phone-pad'
                                    onChangeText={(weight) => this.onInputChange({ weight })}
                                />
                                <Text style={styles.formUnit}>KG</Text>
                            </View>
                        </View>

                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>{this.state.translateMethod('translation.exposeIDE.views.regestration.BofyFatPercentage')} %</Text>
                                <Text style={styles.prompt}>({this.state.translateMethod('translation.common.optional')})</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={this.state.currentLanguage !== 'Hebrew' ? styles.input : styles.hebInput}
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
                                <Text>{this.state.translateMethod('translation.common.skip')} ></Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.nextBtn}
                                onPress={this.onSubmit}
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
    signUpData: state.AuthReducer.signUpData,
    userType: state.AuthReducer.userType
});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData)),
    signUp: (data: any) => dispatch(actions.signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);