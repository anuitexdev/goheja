import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text } from "react-native";
import wizard from './wizard.style';


interface State {
}

interface Props {
    currentStep: number
}

class Wizard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={wizard.steps}>
                <View style={wizard.stepsLine}></View>

                <View style={this.props.currentStep === 1 ? wizard.activeStep : this.props.currentStep !== 1 ? wizard.completeStep : wizard.step}>
                    {
                        this.props.currentStep > 1 ? 
                        <View style={wizard.check}>
                        </View> :
                        <Text style={wizard.text}>
                        1
                        </Text> 
                    }
                </View>

                <View style={this.props.currentStep === 2 ? wizard.activeStep : this.props.currentStep >= 3 ? wizard.completeStep : wizard.step}>
                    {
                        this.props.currentStep > 2 ?
                        <View style={wizard.check}>
                        </View> :
                        <Text style={wizard.text}>
                        2
                        </Text>
                    }
                </View>

                <View style={this.props.currentStep === 3 ? wizard.activeStep : this.props.currentStep >= 4 ? wizard.completeStep : wizard.step}>
                    {
                        this.props.currentStep > 3 ? 
                        <View style={wizard.check}>
                        </View> : 
                        <Text style={wizard.text}>
                        3
                        </Text>
                    }
                </View>

                <View style={this.props.currentStep === 4 ? wizard.activeStep : this.props.currentStep === 5 ? wizard.completeStep : wizard.step}>
                    {
                        this.props.currentStep > 4 ? 
                        <View style={wizard.check}>
                        </View> :
                        <Text
                        style={wizard.text}>
                        4
                        </Text>
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currentStep: state.AuthReducer.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
