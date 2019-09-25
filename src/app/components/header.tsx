import {Component} from 'react';
import {Text, View, Picker, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import header from './header/header.style';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth.actions';
import AuthReducer from '../redux/reducers/auth.reducer';

interface Props {
  changeLanguage: (data: string) => void;
  language: string;
}

interface State {
  language: string;
  dropDownIsVisible: boolean;
}
class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: 'English',
      dropDownIsVisible: false
    };
  }

  private changeLanguage = (value: string) => {
    this.props.changeLanguage(value);
  }

  private toggleDropDown = () => {
    this.setState({dropDownIsVisible: !this.state.dropDownIsVisible})
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
        <View style={{position: 'relative'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => this.toggleDropDown()}
            >
            <Icon
              size={25}
              name={'language'}
              style={{color: '#C5CACE', marginRight: 7}}
            />
            <Text style={{color: '#C5CACE', fontWeight: 'bold'}}>{this.props.language}</Text>
            <IconMat
              size={30}
              name={'arrow-drop-down'}
              style={{color: '#C5CACE'}}
            />
          </TouchableOpacity>
          {
            this.state.dropDownIsVisible ? 
          <View style={header.languageDropDown}>
            <TouchableOpacity style={header.languageItemHeader} onPress={() => this.toggleDropDown()}>
              <Icon
                size={25}
                name={'language'}
                style={{color: '#C5CACE', marginRight: 7}}
              />
              <Text style={{color: '#C5CACE', fontWeight: 'bold'}}>
                {this.props.language}
              </Text>
              <IconMat
                size={30}
                name={'arrow-drop-up'}
                style={{color: '#C5CACE'}}
              />
            </TouchableOpacity>
            <View style={header.languageItemWrapper}>
              <View style={header.languageItemActive}>
                <Text>English</Text>
                <Text style={header.abbreviation}>ENG</Text>
              </View>
            </View>
            <View style={header.languageItemWrapper}>
              <View style={header.languageItem}>
                <Text>עִבְרִית</Text>
                <Text style={header.abbreviation}>HEB</Text>
              </View>
            </View>
            <View style={header.languageItemWrapper}>
              <TouchableOpacity style={header.languageItem} onPress={() => this.changeLanguage('Русский')}>
                <Text>Русский</Text>
                <Text style={header.abbreviation}>RUS</Text>
              </TouchableOpacity>
            </View>
            <View style={header.languageItemWrapper}>
              <View style={header.languageItem}>
                <Text>العَرَبِيَّة</Text>
                <Text style={header.abbreviation}>ARA</Text>
              </View>
            </View>
          </View> : null }

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  language: state.AuthReducer.language
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage: (data: string) => dispatch(actions.changeLang(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

