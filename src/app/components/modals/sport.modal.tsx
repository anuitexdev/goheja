import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal, View} from "react-native";
import RunningModals from './runningContent/running.content';

interface State {
}

interface Props {
    modalVisible: boolean;
    selectedSport: string,
}

class SportModal extends Component<Props, State> {

    constructor(props: Props) {
        super(props);    
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.props.modalVisible}
                >
                {this.props.selectedSport === 'Running' ? <RunningModals/> : null }
         
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    modalVisible: state.ModalReducer.openModal,
    modalNumber: state.ModalReducer.modalNumber,
    selectedSport: state.ModalReducer.selectedSport,

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SportModal);
