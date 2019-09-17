import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import sports from './sports.styles';
import * as actions from '../../../redux/actions/modal.actions';
import SportModal from '../../../components/modals/sport.modal';

interface State {
}

interface Props {
    modalOpen: () => void,
}

class SportsView extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

    }

    public selectSport = () => {
        this.props.modalOpen();
    }

    render() {
        return (
            <View style={sports.container}>
                <Text style={sports.title}>
                    Hi Dafni : &#x2769;
                </Text>
                <Text style={sports.subtitle}>
                    We’ve verified your email and lunched your account successfully
                </Text>
                <Text style={sports.chooseCategory}>
                    Configure Your sports
                </Text>
                <View style={sports.categories}>
                    <TouchableOpacity onPress={this.selectSport}>
                        <View style={[sports.category, { marginRight: 20 }]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#272e43' }}>
                                Cycling
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.selectSport}>
                        <View style={sports.category}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#272e43' }}>
                                Swimming
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.selectSport}>
                    <View style={sports.category}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#272e43' }}>
                            Running
                    </Text>
                    </View>
                </TouchableOpacity>
                <View style={sports.footer}>
                    <TouchableOpacity
                        onPress={() => Alert.alert('asd')}>
                        <Text style={sports.skipButton}>
                            Skip >
                        </Text>
                    </TouchableOpacity>
                </View>
                <SportModal />
            </View>
        )
    }
}


const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    modalOpen: () => dispatch(actions.modalOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsView);
