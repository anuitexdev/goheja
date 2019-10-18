import { View, Platform } from 'react-native';
import React, { Component, Fragment } from 'react';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import CoachFlowAfterRegView from './coachFlowAfterReg/coachFlowAfterReg.view';
import SportsView from './sports/sports.view'
import { connect } from 'react-redux';
import Header from '../../components/header/header';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    userType: number,
}

interface State {

}

class HomeScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
        }
    }

    static navigationOptions = {
        drawerLabel: 'Notifications',
    };

    render() {
        return (
            <Fragment>
            {Platform.OS === 'android' ?  <Header/>: null} 
                <View>
                    {/* <Header/> */}
                    {
                         this.props.userType == 1 ?
                         <SportsView />
                        :
                        this.props.userType == 0 ?
                        <CoachFlowAfterRegView />
                    :
                    null
                    }
                </View>
            </Fragment>

        );
    }
};


const mapStateToProps = (state: any) => ({
    userType: state.AuthReducer.userData.userType,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
