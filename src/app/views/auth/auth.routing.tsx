
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './signIn/signIn';
import SignUpScreen from './signUp/signUp';
import ForgotPasswordScreen from './forgotPassword/forgotPassword';

const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
    forgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: 'signIn',
    headerMode: "none"
  },
);

export default AppNavigator;
