import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import sport from './lactate.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number
}

interface Props {
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: number) => void,
}

class LactateView extends Component<Props, State> {
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
        this.props.changeModal(2);
    }

    render() {
        return (


            <View style={sport.backDrop}>
                <TouchableWithoutFeedback onPress={this.hideModal}>
                    <Icon
                        style={sport.showBtn}
                        size={50}
                        name={'ios-close'}
                    />
                </TouchableWithoutFeedback>
                <View style={sport.modalPage}>
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <Text style={sport.backBtn}>
                            Back
                            </Text>
                    </TouchableWithoutFeedback>
                    <Text style={sport.title}>
                        Running Lactate Threshold
                        </Text>
                    <Text style={sport.subtitle}>
                        What’s your Runing Lactate Threshold
                        </Text>

                    <View style={sport.fullComponent}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                ref={(ref) => this.input1 = ref}
                                placeholder="0"
                                onFocus={() => this.changeFocus(1)}
                                maxLength={1}
                                style={this.state.activeInputNumber === 1 ? sport.focusInput : sport.infoInput}
                                onChangeText={() => this.input2.focus()}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                            <TextInput
                                placeholder="0"
                                ref={(ref) => this.input2 = ref}
                                maxLength={1}
                                onFocus={() => this.changeFocus(2)}
                                onChangeText={() => this.input3.focus()}
                                style={this.state.activeInputNumber === 2 ? sport.focusInput : sport.infoInput}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                            <TextInput
                                ref={(ref) => this.input3 = ref}
                                style={[this.state.activeInputNumber === 3 ? sport.focusInput : sport.infoInput, { marginRight: 0 }]}
                                placeholder="0"
                                maxLength={1}
                                onFocus={() => this.changeFocus(3)}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#99a8af',
                                marginTop: 13
                            }}>
                            bpm
                        </Text>
                    </View>


                    <View style={sport.footerBtns}>
                        <TouchableOpacity>
                            <Text style={sport.skipBtn}>
                                Skip >
                                </Text>
                        </TouchableOpacity>
                        {false ? <TouchableOpacity style={sport.nextBtn}>
                            <Text style={sport.nextBtnText}>
                                I don't know
                                    </Text>
                        </TouchableOpacity> :
                            <TouchableWithoutFeedback onPress={this.changeModal}>
                                <View style={sport.nextBtn}>
                                    <Text style={sport.nextBtnText}>
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
    changeModal: (value: number) => dispatch(actions.changeRunningModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LactateView);
