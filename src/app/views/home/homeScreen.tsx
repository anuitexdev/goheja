import { Text, Button } from 'react-native';
import React, { Fragment, Component } from 'react';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import SportModal from '../../components/modals/sport.modal';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

class HomeScreen extends Component<Props> {
    static navigationOptions = {
        drawerLabel: 'Notifications',
    };

    render() {
        return (
            <Fragment>
                <SportModal/>
            </Fragment>
        );
    }
};

export default HomeScreen;