import { Text, Button } from 'react-native';
import React, { Fragment, Component } from 'react';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

class AppScreen extends Component<Props> {
    static navigationOptions = {
        drawerLabel: 'Notifications',
    };

    render() {
        return (
            <Fragment>
                <Button
                    title='Go to Auth'
                    onPress={() => this.props.navigation.navigate('Auth')}
                />
                <Text>Main App Page</Text>
            </Fragment>
        );
    }
};

export default AppScreen;