import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, Modal, Alert, View, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import sport from './sport.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    modalVisible: boolean;
}

interface Props {
}

class SportModal extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }


    setModalVisible = () => {
        console.log('click')
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    render() {
        return (
            <View>
                <View style={{ marginTop: 22 }}>
                    <TouchableOpacity
                        onPress={this.setModalVisible.bind(this, false)}>
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(42, 50, 54, 0.3)'}}>
                    <TouchableWithoutFeedback onPress={this.setModalVisible.bind(this, false)}>
                        <Icon
                        style={sport.showBtn}
                        size={50}
                        name={'ios-close'}
                        />
                    </TouchableWithoutFeedback>
                    <View style={sport.modalPage}>
                        <TouchableWithoutFeedback onPress={this.setModalVisible.bind(this, false)}>
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
                            <Text>
                            COMPONENT
                            </Text>
                        </View>
                        <View style={sport.footerBtns}>
                            <TouchableOpacity>
                                <Text style={sport.skipBtn}>
                                    Skip >
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={sport.nextBtn}>
                                    <Text style={sport.nextBtnText}>
                                    I don't know
                                    </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currentStep: state.AuthReducer.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SportModal);
