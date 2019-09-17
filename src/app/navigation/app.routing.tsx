import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthRouting from './auth.routing';
import LoggedInNavigation from "./loggedIn.routing";

export default createAppContainer(createSwitchNavigator({
    Home: LoggedInNavigation,
    Auth: AuthRouting,
},
    {
        initialRouteName: 'Home',
    }
));