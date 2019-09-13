import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text } from "react-native";
import wizard from './wizard.style';


interface State {
    isActive: boolean
}

interface Props {

}

class Wizard extends Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={wizard.steps}>
                <View style={wizard.stepsLine}></View>
                <View style={wizard.step}>
                    <Text style={wizard.text}>
                        1
                    </Text>
                    <View style={wizard.check}>
                    </View>
                </View>
                <View style={wizard.step}>
                    <Text>
                        2
                    </Text>
                    <View style={wizard.check}>
                    </View>
                </View>
                <View style={wizard.step}>
                    <Text>
                        3
                    </Text>
                    <View style={wizard.check}>
                    </View>
                </View>
                <View style={wizard.step}>
                    <Text>
                        4
                    </Text>
                    <View style={wizard.check}>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
