import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import swimtime from './swimTime.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number
}

interface Props {
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (numberStep: number) => void,
}

class SwimTimeView extends Component<Props, State> {
    private inputDozentsOfMinutes: any;
    private inputUnitsOfMinutes: any;
    private inputDozentsOfSeconds: any;
    private inputUnitsOfSeconds: any;

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
        this.props.changeModal(3);
    }

    render() {
        return (


                    <View style={swimtime.backDrop}>
                        <TouchableWithoutFeedback onPress={this.hideModal}>
                            <Icon
                                style={swimtime.showBtn}
                                size={50}
                                name={'ios-close'}
                            />
                        </TouchableWithoutFeedback>
                        <View style={swimtime.modalPage}>
                            <TouchableWithoutFeedback onPress={this.hideModal}>
                                <Text style={swimtime.backBtn}>
                                    Back
                            </Text>
                            </TouchableWithoutFeedback>
                            <Text style={swimtime.title}>
                            What’s your best{"\n"}
                            1000m Swim time?
                        </Text>

                            <View style={swimtime.fullComponent}>
                            <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    ref={(ref) => this.inputDozentsOfMinutes = ref }
                                    placeholder="0"
                                    onFocus={() => this.changeFocus(1)}
                                    maxLength={1}
                                    style={this.state.activeInputNumber === 1 ? swimtime.focusInput : swimtime.infoInput}
                                    onChangeText={() => this.inputUnitsOfMinutes.focus()}
                                >
                                </TextInput>
                                <TextInput
                                    placeholder="0"
                                    ref={(ref) => this.inputUnitsOfMinutes = ref }
                                    maxLength={1}
                                    onFocus={() => this.changeFocus(2)}
                                    onChangeText={() => this.inputDozentsOfSeconds.focus()}
                                    style={[this.state.activeInputNumber === 2 ? swimtime.focusInput : swimtime.infoInput, { marginRight: 8 }]}
                                >
                                </TextInput>
                                </View>
                                <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13}}>
                                    Min
                                </Text>
                            </View>
                                <View style={swimtime.colonWrapper}>
                                    <Text style={swimtime.colon}>
                                    :
                                    </Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                   <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                        ref={(ref) => this.inputDozentsOfSeconds = ref }
                                        style={[this.state.activeInputNumber === 3 ? swimtime.focusInput : swimtime.infoInput, { marginLeft: 8 }]}
                                        placeholder="0"
                                        maxLength={1}
                                        onChangeText={() => this.inputUnitsOfSeconds.focus()}
                                        keyboardType={"number-pad"}
                                        onFocus={() => this.changeFocus(3)}
                                        >
                                        </TextInput>
                                        <TextInput
                                            ref={(ref) => this.inputUnitsOfSeconds = ref }
                                            style={[this.state.activeInputNumber === 4 ? swimtime.focusInput : swimtime.infoInput, { marginRight: 0 }]}
                                            placeholder="0"
                                            maxLength={1}
                                            keyboardType={"number-pad"}
                                            onFocus={() => this.changeFocus(4)}
                                        >
                                        </TextInput>
                                        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                                    </View>
                                   </View>
                                    <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13, marginRight: 24}}>
                                        Sec
                                    </Text>
                                </View>
                            </View>

                            <View style={swimtime.footerBtns}>
                                <TouchableOpacity>
                                    <Text style={swimtime.skipBtn}>
                                        Skip >
                                </Text>
                                </TouchableOpacity>
                                {false ? <TouchableOpacity style={swimtime.nextBtn}>
                                    <Text style={swimtime.nextBtnText}>
                                        I don't know
                                    </Text>
                                </TouchableOpacity> :
                                    <TouchableWithoutFeedback  onPress={this.hideModal}>
                                    <View style={swimtime.nextBtn}>
                                        <Text style={swimtime.nextBtnText}>
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
    changeModal: (numberStep: number) => dispatch(actions.changeSwimmingModal(numberStep)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwimTimeView);
