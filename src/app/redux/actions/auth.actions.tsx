import AuthService from '../../services/auth.service'
import UserSignInData from 'src/app/shared/models/userSignInData';
import UserSignUpData from '../../shared/models/userSignUpData';
import { Alert } from 'react-native';

export const successAuth = (userToken: string, type: string) => {
    if (type === 'login') {
        return { type: 'LOGIN_SUCCESS', userToken }
    } else {
        return {type: 'REGISTER_SUCCESS', userToken}
    }
}

export const failedAuth = (err: any) => {
    return { type: 'AUTH_FAILED', err }
}

export const signIn = (userData: UserSignInData) => {
    return async (dispatch: any) => {
        await AuthService.signIn(userData).then(res => {

            if (res instanceof Error) {
                Alert.alert(res.message);
                dispatch(failedAuth(res));
                return;
            }

            if (!res.data.token) {
                Alert.alert('Invalid email or password');
                dispatch(failedAuth(res));
                return;
            }
            dispatch(successAuth(res, 'login'));
        });
    }
}

export const signUp = (userData: UserSignUpData) => {
    return async (dispatch: any) => {
        await AuthService.signUp(userData).then(res => {

            if (res instanceof Error) {
                Alert.alert(res.message);
                dispatch(failedAuth(res));
                return;
            }
            dispatch(successAuth('', 'register'));
        }
        );
    }
}

export const changeScreen = () => {
    return { type: 'CHANGE_SCREEN' };
}