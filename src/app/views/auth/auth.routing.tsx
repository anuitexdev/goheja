
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './signIn/signIn';
import SignUpScreen from './signUp/signUp';
import WelcomeScreen from './signUp/welcome';

const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
    welcome: WelcomeScreen
  },
  {
    initialRouteName: 'signUp'
  },
);

export default AppNavigator;
