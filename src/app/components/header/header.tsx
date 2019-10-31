import { Component } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import header from './header.style';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth.actions';
import BaseTranslateService from '../../shared/helpers/basicTranslate.service';
import styles from 'src/app/views/auth/signUp/athlete/personalInfo/styles';

interface Props {
  changeLanguage: (data: string) => void,
  getAllLanguages: () => void,
  language: string,
  languagesList: any
}

interface State {
  language: string;
  dropDownIsVisible: boolean;
  key: string,
}


class Header extends Component<Props, State, BaseTranslateService> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: this.props.language,
      dropDownIsVisible: false,
      key: 'Eng',
    };
  } 

  componentWillMount = () => {
    this.props.getAllLanguages();
  
  }

  private changeLanguage = async (value: string, key: string) => {
    BaseTranslateService.setCurrentLanguage({ language: value });
     await this.props.changeLanguage(value);
      await this.setState({
      language: value,
      key,
      dropDownIsVisible: !this.state.dropDownIsVisible,
    });
  }

  private toggleDropDown = () => {
    this.setState({ dropDownIsVisible: !this.state.dropDownIsVisible })
  }
  languages() {

    let languages = []
    for (let key in this.props.languagesList) {
      languages.push(
        <TouchableOpacity
          key={key}
          onPress={() => this.changeLanguage(this.props.languagesList[key], key)}>
          <View style={header.languageItemWrapper}  >
            <View style={this.state.language === this.props.languagesList[key] ? header.languageItemActive : header.languageItem}>
              <Text>{this.props.languagesList[key]}</Text>
              <Text style={header.abbreviation}>{key}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return languages
  }
  render() {
    return (

      <View
        style={Platform.OS === 'android'? header.headerWrapperAndroid : header.headerWrapperIos}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Go Heja
        </Text>
        <View style={{ position: 'relative'}}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => this.toggleDropDown()}
          >
            <Icon
              size={25}
              name={'language'}
              style={{ color: '#C5CACE', marginRight: 7 }}
            />
            <Text style={{ color: '#C5CACE', fontWeight: 'bold' }}>{this.props.language}</Text>
            <IconMat
              size={30}
              name={'arrow-drop-down'}
              style={{ color: '#C5CACE' }}
            />
          </TouchableOpacity>
          {
            this.state.dropDownIsVisible ?
              <View style={header.languageDropDown}>
                <TouchableOpacity style={header.languageItemHeader} onPress={() => this.toggleDropDown()}>
                  <Icon
                    size={25}
                    name={'language'}
                    style={{ color: '#C5CACE', marginRight: 7 }}
                  />
                  <Text style={{ color: '#C5CACE', fontWeight: 'bold' }}>
                    {this.props.language}
                  </Text>
                  <IconMat
                    size={30}
                    name={'arrow-drop-up'}
                    style={{ color: '#C5CACE' }}
                  />
                </TouchableOpacity>
                {
                  this.props.languagesList ?
                    this.languages()
                    : null
                }
              </View> : null}

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  language: state.AuthReducer.language,
  languagesList: state.AuthReducer.languagesList
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage: (data: string) => dispatch(actions.changeLang(data)),
  getAllLanguages: () => dispatch(actions.getAllLanguages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
