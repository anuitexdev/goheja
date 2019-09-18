import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import threshold from './threshold.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number
}

interface Props {

    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: number) => void,
}

class ThresholdView extends Component<Props, State> {

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


                    <View style={threshold.backDrop}>
                        <TouchableWithoutFeedback onPress={this.hideModal}>
                            <Icon
                                style={threshold.showBtn}
                                size={50}
                                name={'ios-close'}
                            />
                        </TouchableWithoutFeedback>
                        <View style={threshold.modalPage}>
                            <TouchableWithoutFeedback onPress={this.hideModal}>
                                <Text style={threshold.backBtn}>
                                    Back
                            </Text>
                            </TouchableWithoutFeedback>
                            <Text style={threshold.title}>
                                Running{"\n"}
                                Threshold Pace
                        </Text>
                            <Text style={threshold.subtitle}>
                                What’s your Runing Threshold Pace
                        </Text>

                            <View style={threshold.fullComponent}>
                            <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    ref='input1'
                                    placeholder="0"
                                    onFocus={() => this.changeFocus(1)}
                                    maxLength={1}
                                    style={this.state.activeInputNumber === 1 ? threshold.focusInput : threshold.infoInput}
                                    onChangeText={() => this.refs['input2'].focus()}
                                >
                                </TextInput>
                                <TextInput
                                    placeholder="0"
                                    ref='input2'
                                    maxLength={1}
                                    onFocus={() => this.changeFocus(2)}
                                    onChangeText={() => this.refs['input3'].focus()}
                                    style={[this.state.activeInputNumber === 2 ? threshold.focusInput : threshold.infoInput, { marginRight: 8 }]}
                                >
                                </TextInput>
                                </View>
                                <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13}}>
                                    Min
                                </Text>
                            </View>
                                <View style={threshold.colonWrapper}>
                                    <Text style={threshold.colon}>
                                    :
                                    </Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                   <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                        ref='input3'
                                        style={[this.state.activeInputNumber === 3 ? threshold.focusInput : threshold.infoInput, { marginLeft: 8 }]}
                                        placeholder="0"
                                        maxLength={1}
                                        onChangeText={() => this.refs['input4'].focus()}
                                        onFocus={() => this.changeFocus(3)}
                                        >
                                        </TextInput>
                                        <TextInput
                                            ref='input4'
                                            style={[this.state.activeInputNumber === 3 ? threshold.focusInput : threshold.infoInput, { marginRight: 0 }]}
                                            placeholder="0"
                                            maxLength={1}
                                            onFocus={() => this.changeFocus(3)}
                                        >
                                        </TextInput>
                                        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                                        <Text style={{fontWeight: 'bold'}}>
                                            /km
                                        </Text>
                                    </View>
                                   </View>
                                    <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13, marginRight: 24}}>
                                        Sec
                                    </Text>
                                </View>
                            </View>

                            <View style={threshold.footerBtns}>
                                <TouchableOpacity>
                                    <Text style={threshold.skipBtn}>
                                        Skip >
                                </Text>
                                </TouchableOpacity>
                                {false ? <TouchableOpacity style={threshold.nextBtn}>
                                    <Text style={threshold.nextBtnText}>
                                        I don't know
                                    </Text>
                                </TouchableOpacity> :
                                    <TouchableWithoutFeedback  onPress={this.changeModal}>
                                    <View style={threshold.nextBtn}>
                                        <Text style={threshold.nextBtnText}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThresholdView);