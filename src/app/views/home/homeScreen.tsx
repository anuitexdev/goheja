import { View } from 'react-native';
import React, { Component } from 'react';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import Header from '../../components/header/header';
import SportsView from './sports/sports.view';
import { connect } from 'react-redux';


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

class HomeScreen extends Component<Props> {
    static navigationOptions = {
        drawerLabel: 'Notifications',
    };

    render() {
        return (
            <View>
                <Header />
                <SportsView />
            </View>
        );
    }
};


const mapStateToProps = (state: any) => ({
    
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
