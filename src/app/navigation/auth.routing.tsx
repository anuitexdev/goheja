
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../views/auth/signIn/signIn';
import SignUpScreen from '../views/auth/signUp/signUp';
import ForgotPasswordScreen from '../views/auth/forgotPassword/forgotPassword';
import WelcomeScreen from '../views/auth/signUp/welcome/welcome';
const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
    welcome: WelcomeScreen,
    forgotPassword: ForgotPasswordScreen,
  },
  {
    initialRouteName: 'signIn',
    headerMode: "none"
  },
);

export default AppNavigator;
