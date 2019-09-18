import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal, View} from "react-native";
import RunningModals from './runningContent/running.content';
import CyclingModals from './cyclingContent/cycling.content';

interface State {
}

interface Props {
    modalVisible: boolean;
    selectedSport: string,
    modalNumber: number
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
                    transparent={false}
                    visible={this.props.modalVisible}
                >
                {this.props.selectedSport === 'Running' ? <RunningModals/> :
                 this.props.selectedSport === 'Cycling'? <CyclingModals/> : null}
         
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
