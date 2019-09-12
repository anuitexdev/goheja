import { Component, Fragment } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from './unitButtonsStyles';

interface State {
    isActive: boolean
}

interface Props {

}


class UnitButtons extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    public changeBtn = (value: string) => {
        this.setState({
            isActive: !this.state.isActive
        });
        return value;
    }

    render() {
        return (
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
        )
    }
}

export default UnitButtons;