import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';
import TranslateService from '../../../../../services/translation.service';

interface Props {
    nextStepNumber: (nextStepData: any) => void,
    state: any
}

interface State {
    isActive: string,
    unitError: boolean,
    units: string
}

class UnitsAthleteScreen extends Component<Props, State> {
    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)
        this.state = {
            isActive: 'ml',
            unitError: true,
            units: 'ml'
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res
        });

    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
    }

    private unitValidation(value: string) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    public changeBtn = async (value: string) => {
        const unitError = this.unitValidation(value);

        await this.setState({
            isActive: value,
            unitError: unitError,
            units: value
        });
        return value;
    }

    private onSubmit = () => {
        this.props.nextStepNumber({ units: this.state.units });
    }

    render() {

        return (
            <Fragment>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>{this.translateMethod('translation.exposeIDE.views.regestration.tellUsAboutYourself')}</Text>
                        <View>
                            <View style={styles.btnContainer}>

                                <TouchableOpacity style={this.state.isActive !== 'ml' ? styles.unitBtn : styles.activeUnitBtn} onPress={() => this.changeBtn('ml')}>
                                    <Text style={this.state.isActive !== 'ml' ? styles.unitBtnTopText : styles.activeUnitBtnTopText}>{this.translateMethod('translation.exposeIDE.views.regestration.iUse')}</Text>
                                    <Text style={this.state.isActive !== 'ml' ? styles.unitBtnBottomText : styles.activeUnitBtnBottomText}> ml</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={this.state.isActive !== 'km' ? styles.unitBtn : styles.activeUnitBtn} onPress={() => this.changeBtn('km')}>
                                    <Text style={this.state.isActive !== 'km' ? styles.unitBtnTopText : styles.activeUnitBtnTopText}>{this.translateMethod('translation.exposeIDE.views.regestration.iUse')}</Text>
                                    <Text style={this.state.isActive !== 'km' ? styles.unitBtnBottomText : styles.activeUnitBtnBottomText}> km</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.nextBtnWrapper}>
                            <TouchableOpacity style={this.state.unitError ? styles.nextBtn : styles.nextBtnDisabled} disabled={!this.state.unitError} onPress={this.onSubmit}>
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
    state: state.AuthReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData))
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsAthleteScreen);