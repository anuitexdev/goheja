import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import cyclingStyles from './rock.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number,
    hundreds: string,
    dozens: string,
    units: string,
    rockValue: number;
}

interface Props {
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: {rock: number}) => void,
    maxSpeed: number,
}

class RockView extends Component<Props, State> {

    private inputHundreds: any;
    private inputDozens: any;
    private inputUnits: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            activeInputNumber: 0,
            hundreds: '0',
            dozens: '0',
            units: '0',
            rockValue: 0,
        }
        
    }

    public setModalVisible = () => {
        this.props.modalOpen();
    }

    public changeFocus = (activeInputNumber: number) => {
        this.setState({
            activeInputNumber: activeInputNumber
        })
    }

    public hideModal = () => {
        this.props.modalClose();
    }

    public changeModal = () => {
        this.props.changeModal({rock: this.state.rockValue});
        this.props.modalClose();
    }

    public setValue = async (input: any, value: any) => {
        await this.setState({
            ...value,
        })
        input.focus();

        const summaryValue = Number(this.state.hundreds + this.state.dozens + this.state.units);

        this.setState({
            rockValue: summaryValue,
        });
    }

    render() {
        return (


            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(42, 50, 54, 0.3)'
            }}>
                <TouchableWithoutFeedback onPress={this.hideModal}>
                    <Icon
                        style={cyclingStyles.showBtn}
                        size={50}
                        name={'ios-close'}
                    />
                </TouchableWithoutFeedback>
                <View style={cyclingStyles.modalPage}>
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <Text style={cyclingStyles.backBtn}>
                            Back
                        </Text>
                    </TouchableWithoutFeedback>
                    <Text style={cyclingStyles.title}>
                        {this.props.maxSpeed} kph {'\n'}
                        You Rock!
                    </Text>
                    <Text style={cyclingStyles.subtitle}>
                        What was your Avg. Heart Rate
                    </Text>
                    <Text> during that 1h Flat Ride?</Text>

                    <View style={cyclingStyles.fullComponent}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                ref={(ref) => this.inputHundreds = ref}
                                placeholder="0"
                                onFocus={() => this.changeFocus(1)}
                                maxLength={1}
                                style={this.state.activeInputNumber === 1 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                                onChangeText={(hundreds) => this.setValue(this.inputDozens, { hundreds })}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                            <TextInput
                                placeholder="0"
                                ref={(ref) => this.inputDozens = ref}
                                maxLength={1}
                                onFocus={() => this.changeFocus(2)}
                                onChangeText={(dozens) => this.setValue(this.inputUnits, { dozens })}
                                style={this.state.activeInputNumber === 2 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                            <TextInput
                                ref={(ref) => this.inputUnits = ref}
                                style={[this.state.activeInputNumber === 3 ? cyclingStyles.focusInput : cyclingStyles.infoInput, { marginRight: 0 }]}
                                placeholder="0"
                                maxLength={1}
                                onFocus={() => this.changeFocus(3)}
                                onChangeText={(units) => this.setValue(this.inputUnits, { units })}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#99a8af',
                                marginTop: 13
                            }}
                        >
                            bpm
                        </Text>
                    </View>

                    <View style={cyclingStyles.footerBtns}>
                        {
                            this.state.rockValue === 0 ?
                                <TouchableOpacity
                                    style={cyclingStyles.nextBtn}
                                >
                                    <Text
                                        style={cyclingStyles.nextBtnText}
                                    >
                                        I don't remember
                                    </Text>
                                </TouchableOpacity> :
                                <TouchableWithoutFeedback
                                    onPress={this.changeModal}
                                >
                                    <View
                                        style={cyclingStyles.nextBtn}
                                    >
                                        <Text
                                            style={cyclingStyles.nextBtnText}
                                        >
                                            Next
                                    </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    maxSpeed: state.ModalReducer.cyclingData.maxSpeed,
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),
    changeModal: (value: {rock: number}) => dispatch(actions.changeCyclingModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RockView);
