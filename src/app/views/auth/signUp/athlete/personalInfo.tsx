import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import styles from './styles';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}


class PersonalInfoScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)

    }

    public onSubmit = () => {

    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                    <Header />
                    <View style={styles.container}>

                        <Text style={styles.pageHeader}>Personal information</Text>


                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Height</Text>
                                <Text style={styles.prompt}>(optional)</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Type your height…'
                                />
                                <Text style={styles.formUnit}>CM</Text>
                            </View>
                        </View>

                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Weight</Text>
                                <Text style={styles.prompt}>(optional)</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Type your weight'
                                />
                                <Text style={styles.formUnit}>KG</Text>
                            </View>
                        </View>

                        <View style={styles.personalFormControl}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Body fat %</Text>
                                <Text style={styles.prompt}>(optional)</Text>
                            </View>
                            <View style={styles.formControl}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Type your body fat…'
                                />
                                <Text style={styles.formUnit}>%</Text>
                            </View>
                        </View>

                        <View style={styles.personalNextBtnWrapper}>
                            <TouchableOpacity style={styles.skipWrapper}>
                                <Text>Skip ></Text>
                            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);