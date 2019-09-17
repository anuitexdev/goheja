import { View } from 'react-native';
import React, { Component } from 'react';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import Header from '../../components/header';
import SportsView from './sports/sports.view';


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

export default HomeScreen;