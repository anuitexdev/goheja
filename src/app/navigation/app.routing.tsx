import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthRouting from './auth.routing';
import AppNavigator from "./loggedIn.routing";


export default createAppContainer(createSwitchNavigator({
    Home: AppNavigator,
    Auth: AuthRouting,
    },
    {
        initialRouteName: 'Home',
    }
));