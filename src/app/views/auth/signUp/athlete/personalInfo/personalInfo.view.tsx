import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepNumber: number) => void
}


class PersonalInfoScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)

    }

    public onSubmit = () => {
        this.props.nextStepNumber(5);
    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.pageHeader}>Personal information</Text>


                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Height</Text>
                                <Text style={styles.prompt}>(optional)</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Type your height…'
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
                                />
                                <Text style={styles.formUnit}>%</Text>
                            </View>
                        </View>

                        <View style={styles.personalNextBtnWrapper}>
                            <TouchableOpacity
                                style={styles.skipWrapper}
                                onPress={this.onSubmit}
                            >
                                <Text>Skip ></Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.nextBtn}
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

});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepNumber: number) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);