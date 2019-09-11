import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthRouting from './views/auth/auth.routing';
import AppNavigator from './views/app/logged.routing';

export default createAppContainer(createSwitchNavigator({
    Home: AppNavigator,
    Auth: AuthRouting,
},
    {
        initialRouteName: 'Auth',
    }
));