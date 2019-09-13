import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import styles from '../styles';
import UnitButtons from "../../../../components/unitButtons";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}


class UnitsAthleteScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)

    }

    private onSubmit() {
        this.props.navigation.navigate('');
    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                    <Header />

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>Tell us about your units</Text>
                        <View>

                            <UnitButtons />
                        </View>

                        <View style={styles.nextBtnWrapper}>
                            <TouchableOpacity style={styles.nextBtn} onPress={this.onSubmit}>
                                <Text style={styles.nextBtnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsAthleteScreen);