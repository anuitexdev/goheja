import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import sports from './sports.styles';

interface State {

}

interface Props {

}

class SportsView extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <View style={sports.container}>
                <Text style={sports.title}>
                    Hi Dafni : &#x2769;
                </Text>
                <Text style={sports.subtitle}>
                    We’ve verified your email and lunched your account successfully
                </Text>
                <Text style={sports.chooseCategory}>
                    Configure Your sports
                </Text>
                <View style={sports.categories}>
                    <View style={[sports.category, {marginRight: 20}]}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#272e43'}}>
                            Cycling
                        </Text>
                    </View>
                    <View style={sports.category}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#272e43'}}>
                            Swimming
                        </Text>
                    </View>
                </View>
                <View style={sports.category}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#272e43'}}>
                        Running
                    </Text>
                </View>
                <View style={sports.footer}>
                    <TouchableOpacity
                    onPress={() => Alert.alert('asd')}>
                        <Text style={sports.skipButton}>
                            Skip >
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsView);
