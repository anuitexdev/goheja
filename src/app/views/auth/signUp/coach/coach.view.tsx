import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView } from 'react-native';
import Header from '../../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}


class CoachScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)

    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                    <Header />

                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachScreen);