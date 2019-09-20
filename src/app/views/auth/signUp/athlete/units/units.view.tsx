import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepData: any) => void,
    state: any
}

interface State {
    isActive: boolean,
    unitError: boolean,
    units: string
}

class UnitsAthleteScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            isActive: false,
            unitError: false,
            units: ''
        }
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
            isActive: !this.state.isActive,
            unitError: unitError,
            units: value
        });        
        return value;
    }

    private onSubmit = () => {
        this.props.nextStepNumber({units: this.state.units});
    }

    render() {

        return (
            <Fragment>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>Tell us about your units</Text>
                        <View>
                        <View style={styles.btnContainer}>

                        <TouchableOpacity style={this.state.isActive ? styles.unitBtn : styles.activeUnitBtn} onPress={() => this.changeBtn('ml')}>
                            <Text style={this.state.isActive ? styles.unitBtnTopText : styles.activeUnitBtnTopText}>I use</Text>
                            <Text style={this.state.isActive ? styles.unitBtnBottomText : styles.activeUnitBtnBottomText}> ml</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity style={!this.state.isActive ? styles.unitBtn : styles.activeUnitBtn} onPress={() => this.changeBtn('km')}>
                            <Text style={!this.state.isActive ? styles.unitBtnTopText : styles.activeUnitBtnTopText}>I use</Text>
                            <Text style={!this.state.isActive ? styles.unitBtnBottomText : styles.activeUnitBtnBottomText}> km</Text>
                        </TouchableOpacity>
                    </View>
                        </View>
                        <View style={styles.nextBtnWrapper}>
                            <TouchableOpacity style={this.state.unitError ? styles.nextBtn : styles.nextBtnDisabled} disabled={!this.state.unitError} onPress={this.onSubmit}>
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

export default connect(mapStateToProps, mapDispatchToProps)(UnitsAthleteScreen);