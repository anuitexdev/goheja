import {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import window from '../theme/variables';

interface Props {}

interface State {
  language: string;
}
class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: '',
    };
  }
  render() {
    return (
      <View
        style={{
          height: 80,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Go Heja
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={25} name={'language'} />
          <Picker
            selectedValue={this.state.language}
            mode="dropdown"
            style={{height: 50, width: 120}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="English" value="eng" />
            <Picker.Item label="Русский" value="rus" />
          </Picker>
        </View>
      </View>
    );
  }
}

export default Header;
