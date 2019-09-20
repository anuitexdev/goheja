import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepData: any) => void,
    signUp: (data: any) => void,
    signUpData: any,
}

interface State {
    height: number,
    weight: number,
    fat: number,
    signUpData: any,

}


class PersonalInfoScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            height: 0,
            weight: 0,
            fat: 0,
            signUpData: this.props.signUpData,

        }
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
    signUpData: state.AuthReducer.signUpData,
});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData)),
    signUp: (data: any) => dispatch(actions.signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);