import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import achievements from './achievements.style';
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

class AchievementsView extends Component<Props, State> {

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
        this.props.changeModal(4);
    }

    render() {
        return (
            <View style={achievements.backDrop}>
                <TouchableWithoutFeedback onPress={this.hideModal}>
                    <Icon
                        style={achievements.showBtn}
                        size={50}
                        name={'ios-close'}
                    />
                </TouchableWithoutFeedback>
                <View style={achievements.modalPage}>
                    <Text style={achievements.title}>
                        Running{"\n"}
                        achievements
                    </Text>
                    <Text style={achievements.subtitle}>
                        What was the last race you took part in?
                    </Text>
                    <View>
                        <TouchableWithoutFeedback onPress={this.changeModal}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    5 Km
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.changeModal}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    10 Km
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.changeModal}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    Full Marathon
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.changeModal}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    Full Marathon
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.changeModal}>
                            <View style={[achievements.achieveBtns, {marginBottom: 0}]}>
                                <Text style={achievements.achieveTextBtn}>
                                    None of the above
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
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

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsView);
