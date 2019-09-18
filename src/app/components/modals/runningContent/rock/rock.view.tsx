import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import rock from './rock.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number
}

interface Props {
    modalVisible: boolean;
    modalNumber: number,
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: number) => void,
}

class RockView extends Component<Props, State> {
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
        this.props.changeModal(6);
    }

    render() {
        return (
   

                    <View style={rock.backDrop}>
                        <TouchableWithoutFeedback onPress={this.hideModal}>
                            <Icon
                                style={rock.showBtn}
                                size={50}
                                name={'ios-close'}
                            />
                        </TouchableWithoutFeedback>
                        <View style={rock.modalPage}>
                            <TouchableWithoutFeedback onPress={this.hideModal}>
                                <Text style={rock.backBtn}>
                                    Back
                            </Text>
                            </TouchableWithoutFeedback>
                            <Text style={rock.title}>
                                Running Lactate Threshold
                        </Text>
                            <Text style={rock.subtitle}>
                                What’s your Runing Lactate Threshold
                        </Text>

                            <View style={rock.fullComponent}>
                              <View style={{flexDirection: 'row'}}>
                                    <TextInput
                                        ref={(ref) => this.input1 = ref}
                                        placeholder="0"
                                        onFocus={() => this.changeFocus(1)}
                                        maxLength={1}
                                        style={this.state.activeInputNumber === 1 ? rock.focusInput : rock.infoInput}
                                        onChangeText={() => this.input2.focus()}
                                    >
                                    </TextInput>
                                    <TextInput
                                        placeholder="0"
                                        ref={(ref) => this.input2 = ref }
                                        maxLength={1}
                                        onFocus={() => this.changeFocus(2)}
                                        onChangeText={() => this.input3.focus()}
                                        style={this.state.activeInputNumber === 2 ? rock.focusInput : rock.infoInput}
                                    >
                                    </TextInput>
                                    <TextInput
                                        ref={(ref) => this.input3 = ref }
                                        style={[this.state.activeInputNumber === 3 ? rock.focusInput : rock.infoInput, { marginRight: 0 }]}
                                        placeholder="0"
                                        maxLength={1}
                                        onFocus={() => this.changeFocus(3)}
                                    >
                                    </TextInput>
                              </View>
                              <Text
                              style={{
                                fontSize: 20,
                                color: '#99a8af',
                                marginTop: 13,
                              }}>
                              bpm
                            </Text>
                            </View>

                            <View style={rock.footerBtns}>
                                <TouchableOpacity>
                                    <Text style={rock.skipBtn}>
                                        Skip >
                                </Text>
                                </TouchableOpacity>
                                {false ? <TouchableOpacity style={rock.nextBtn}>
                                    <Text style={rock.nextBtnText}>
                                        I don't remmember
                                    </Text>
                                </TouchableOpacity> :
                                    <TouchableWithoutFeedback onPress={this.hideModal}>
                                    <View style={rock.nextBtn}>
                                        <Text style={rock.nextBtnText}>
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
    modalVisible: state.ModalReducer.openModal,
    modalNumber: state.ModalReducer.runningModalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),
    changeModal: (value: number) => dispatch(actions.changeRunningModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RockView);
