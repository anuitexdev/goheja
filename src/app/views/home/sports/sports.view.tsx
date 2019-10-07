import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import sports from './sports.styles';
import * as actions from '../../../redux/actions/modal.actions';
import SportModal from '../../../components/modals/sport.modal';
import TranslateService from '../../../services/translation.service';

interface State {
}

interface Props {
    modalOpen: () => void,
    setSportType: (type: string) => void,
}

class SportsView extends Component<Props, State> {
    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)

        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
          this.forceUpdate();
          this.translateMethod = res
        });
    }

    componentWillUnmount(){
        this.languageSubscription.unsubscribe();
    }

    public selectSport = (sportType: string) => {
        this.props.setSportType(sportType);
        this.props.modalOpen();
    }

    render() {
        return (
            <View style={sports.container}>
                <Text style={sports.title}>
                    Hi Dafni : &#x2769;
                </Text>
                <Text style={sports.subtitle}>
                {this.translateMethod('translation.exposeIDE.views.confirmation.text')}
                </Text>
                <Text style={sports.chooseCategory}>
                {this.translateMethod('translation.exposeIDE.views.userSetSports.title')}
                </Text>
                <View style={sports.categories}>
                    <TouchableOpacity onPress={() =>this.selectSport('Cycling')}>
                        <View style={sports.category}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#272e43' }}>
                            {this.translateMethod('translation.common.cycling')}
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.selectSport('Swimming')}>
                        <View style={[sports.category, {marginLeft: 20}]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#272e43' }}>
                            {this.translateMethod('translation.common.swimming')}
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.selectSport('Running')}>
                    <View style={sports.category}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#272e43' }}>
                        {this.translateMethod('translation.common.running')}
                    </Text>
                    </View>
                </TouchableOpacity>
                <View style={sports.footer}>
                    <TouchableOpacity
                        onPress={() => Alert.alert('Will be soon')}>
                        <Text style={sports.skipButton}>
                        {this.translateMethod('translation.common.running')} >
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
    setSportType: (type: string) => dispatch(actions.setSportType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsView);
