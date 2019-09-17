import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/modal.actions';
import { Text, Modal, Alert, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import sport from './sport.style';
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

class SportModal extends Component<Props, State> {
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

    // public disabledFocus = () => {
    //     this.setState({
    //         hasFocus: false
    //     })
    // }

    public hideModal = () => {
        this.props.modalClose();
    }

    public changeModal = () => {
        this.props.changeModal(2)
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.props.modalVisible}
                >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(42, 50, 54, 0.3)'}}>
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
                            <TextInput 
                                ref='input1'
                                placeholder="0"
                                onFocus={() =>this.changeFocus(1)}
                                maxLength={1}
                                style={this.state.activeInputNumber === 1 ? sport.focusInput : sport.infoInput} 
                                onChangeText={() => this.refs['input2'].focus()}
                                >
                            </TextInput>
                            <TextInput 
                                placeholder="0"
                                ref='input2'
                                maxLength={1}
                                onFocus={() => this.changeFocus(2)}
                                onChangeText={() => this.refs['input3'].focus()}
                                style={this.state.activeInputNumber === 2 ? sport.focusInput : sport.infoInput} 
                                >
                            </TextInput>
                            <TextInput  
                                ref='input3'
                                style={[this.state.activeInputNumber === 3 ? sport.focusInput : sport.infoInput, {marginRight: 0}]} 
                                placeholder="0"
                                maxLength={1}
                                onFocus={ () => this.changeFocus(3) }
                            >
                            </TextInput>
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
                                    <TouchableOpacity style={sport.nextBtn} onPress={this.changeModal}>
                                        <Text style={sport.nextBtnText}>
                                            Next
                                    </Text>
                                    </TouchableOpacity>}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    modalVisible: state.ModalReducer.openModal,
    modalNumber: state.ModalReducer.modalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),
    changeModal: (value: number) => dispatch(actions.changeModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportModal);
