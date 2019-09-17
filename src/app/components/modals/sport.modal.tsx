import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, Modal, Alert, View, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';



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
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                // onRequestClose={() => {
                //     Alert.alert('Modal has been closed.');
                // }}
                >
                <TouchableWithoutFeedback onPress={this.setModalVisible.bind(this, false)}>
                    <Text>HIDE</Text>
                </TouchableWithoutFeedback>
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
