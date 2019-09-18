import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import cyclingStyles from './speed.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number
}

interface Props {
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: number) => void,
}

class SpeedView extends Component<Props, State> {

    private input1: any;
    private input2: any;
    private input3: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            activeInputNumber: 0,
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
        this.props.changeModal(4);
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
                        What’s your 1h Flat
                        </Text>
                    <Text style={cyclingStyles.subtitle}>
                        Ride Max Speed?
                        </Text>

                    <View style={cyclingStyles.fullComponent}>
                        <TextInput
                            ref={(ref) => this.input1 = ref}
                            placeholder="0"
                            onFocus={() => this.changeFocus(1)}
                            maxLength={1}
                            style={this.state.activeInputNumber === 1 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                            onChangeText={() => this.input2.focus()}
                        >
                        </TextInput>
                        <TextInput
                            placeholder="0"
                            ref={(ref) => this.input2 = ref}
                            maxLength={1}
                            onFocus={() => this.changeFocus(2)}
                            onChangeText={() => this.input3.focus()}
                            style={this.state.activeInputNumber === 2 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                        >
                        </TextInput>
                        <View>
                            <Text>.</Text>
                        </View>
                        <TextInput
                            ref={(ref) => this.input3 = ref}
                            style={[this.state.activeInputNumber === 3 ? cyclingStyles.focusInput : cyclingStyles.infoInput, { marginRight: 0 }]}
                            placeholder="0"
                            maxLength={1}
                            onFocus={() => this.changeFocus(3)}
                        >
                        </TextInput>
                    </View>

                    <View style={cyclingStyles.footerBtns}>
                        <TouchableOpacity>
                            <Text style={cyclingStyles.skipBtn}>
                                Skip >
                                </Text>
                        </TouchableOpacity>
                        {false ? <TouchableOpacity style={cyclingStyles.nextBtn}>
                            <Text style={cyclingStyles.nextBtnText}>
                                I don't know
                                    </Text>
                        </TouchableOpacity> :
                            <TouchableWithoutFeedback onPress={this.changeModal}>
                                <View style={cyclingStyles.nextBtn}>
                                    <Text style={cyclingStyles.nextBtnText}>
                                        Next
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>}
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),
    changeModal: (value: number) => dispatch(actions.changeCyclingModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeedView);
