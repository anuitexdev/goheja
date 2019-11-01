
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../views/auth/signIn/signIn';
import SignUpScreen from '../views/auth/signUp/signUp';
import ForgotPasswordScreen from '../views/auth/forgotPassword/forgotPassword.view';
import WelcomeScreen from '../views/auth/signUp/welcome/welcome';
// import ChartScreen from '../views/auth/chart/chart.view';
// import D3Screen from '../views/auth/d3charts/d3charts';
// import TestScreen from '../views/auth/test/test';
// import Echart from '../views/auth/echarts/echarts.view';
const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
    welcome: WelcomeScreen,
    forgotPassword: ForgotPasswordScreen,
    // chart: ChartScreen,
    // test: TestScreen, 
  },
  {
    initialRouteName: 'signIn',
    headerMode: "none"
  },
);

export default AppNavigator;
