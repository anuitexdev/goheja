import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthRouting from './views/auth/auth.routing';
// import  AppNavigator  from './views/app/logged.routing';
import AppDrawerNavigator from "./views/app/logged.routing";

export default createAppContainer(createSwitchNavigator({
    // Home: AppNavigator,
    Home: AppDrawerNavigator,
    Auth: AuthRouting,
    },
    {
        initialRouteName: 'Auth',
    }
    ));