import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/modal.actions';
import { Text, Modal, Alert, View, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import sport from './sport.style';
import Icon from 'react-native-vector-icons/Ionicons';

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
    modalVisible: state.ModalReducer.openModal,
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),

});

export default connect(mapStateToProps, mapDispatchToProps)(SportModal);
