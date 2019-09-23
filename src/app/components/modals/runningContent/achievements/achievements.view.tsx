import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import achievements from './achievements.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number,
    achievementsValue: string
}

interface Props {
    modalVisible: boolean;
    modalNumber: number,
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: {achievements: string}) => void,
}

class AchievementsView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            activeInputNumber: 0,
            achievementsValue: ''
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

    public changeModal = async (value: string) => {    
        await this.setState({
            achievementsValue: value
        })
        this.props.changeModal({achievements: this.state.achievementsValue});
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
                        <TouchableWithoutFeedback onPress={() => this.changeModal('5 Km')}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    5 Km
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.changeModal('10 Km')}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    10 Km
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.changeModal('½ Marathon')}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    ½ Marathon
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.changeModal('Full Marathon')}>
                            <View style={achievements.achieveBtns}>
                                <Text style={achievements.achieveTextBtn}>
                                    Full Marathon
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.changeModal('None of the above')}>
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
    changeModal: (value: {achievements: string}) => dispatch(actions.changeRunningModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsView);
