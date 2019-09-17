import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, Modal, View, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as actions from '../../redux/actions/modal.actions';



interface State {

}

interface Props {
    modalVisible: boolean;
    modalClose: () => void,
    modalOpen: () => void,
}

class SportModal extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    public setModalVisible = () => {
        this.props.modalOpen();
    }

    public hideModal = () => {
        this.props.modalClose();
    }

    render() {
        return (
            <View>
                <View style={{ marginTop: 22 }}>
                    <TouchableOpacity
                        onPress={this.setModalVisible}>
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                >
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <Text>HIDE</Text>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    modalVisible: state.ModalReducer.openModal,
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),

});

export default connect(mapStateToProps, mapDispatchToProps)(SportModal);
