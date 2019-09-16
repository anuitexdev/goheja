import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import UnitButtons from "../../../../../components/unitButtons";
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepNumber: number) => void
}

interface State {
}

class UnitsAthleteScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

    }

    private onSubmit = () => {
        this.props.nextStepNumber(4);
    }

    render() {

        return (
            <Fragment>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>Tell us about your units</Text>
                        <View>
                            <UnitButtons />
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

export default connect(mapStateToProps, mapDispatchToProps)(UnitsAthleteScreen);