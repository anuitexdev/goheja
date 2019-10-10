import { View } from 'react-native';
import React, { Component, Fragment } from 'react';
import { NavigationParams, NavigationScreenProp, SafeAreaView } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import Header from '../../components/header/header';
import CoachFlowAfterRegView from './coachFlowAfterReg/coachFlowAfterReg.view';
import SportsView from './sports/sports.view'
import { connect } from 'react-redux';

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
                <View>
                    {/* <Header/> */}
                    {
                        this.props.userType == 1 ? 
                        <SportsView /> 
                        :
                        this.props.userType == 0 ?
                        <CoachFlowAfterRegView/> 
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
