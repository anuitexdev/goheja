
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './signIn/signIn';
import SignUpScreen from './signUp/signUp';
import ForgotPasswordScreen from './forgotPassword/forgotPassword';
import WelcomeScreen from './signUp/welcome';

const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
        welcome: WelcomeScreen,
        forgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: 'signIn',
    headerMode: "none"
  },
);

export default AppNavigator;
