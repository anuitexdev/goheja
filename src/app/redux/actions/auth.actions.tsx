import AuthService from '../../services/auth.service'
import UserSignInData from 'src/app/shared/models/userSignInData.model';

import { Alert } from 'react-native';

export const successAuth = (userToken: string, type: string) => {
    if (type === 'login') {
        return { type: 'LOGIN_SUCCESS', userToken }
    } else {
        return { type: 'REGISTER_SUCCESS', userToken }
    }
}

export const failedAuth = (err: any) => {
    return { type: 'AUTH_FAILED', err }
}

export const successTeamCode = (data: any) =>{
    return {type: 'SUCCESS_GROUP_CODE', data};
}
export const failedTeamCode = (data: any) =>{
    return {type: 'FAILED_GROUP_CODE', data};
}

export const changeScreen = (role: number) => {
    return { type: 'CHANGE_SCREEN',userType: role };
}

export const changeStep = (payload: any) => {   
    return { type: 'CHANGE_STEP', payload}
}

export const changeCoachStep = (payload: any) => {   
    return { type: 'CHANGE_COACH_STEP', payload}
}

export const changeLanguage = (payload: any) => {
    return { type: 'CHANGE_LANGUAGE', payload}
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

export const changeLang = (data: string) => {
    return async (dispatch: any) => {
        await AuthService.getLanguage(data).then(res => {

            if (res instanceof Error) {
                Alert.alert('doesnt have language');
                // dispatch(failedAuth(res));
                return;
            }
            dispatch(changeLanguage({translation: res.data.toString(), language: data}));
        }
        );
    }
}

export const signUp = (userData: any) => {
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
export const sendCode = (code: string) => {
    return async (dispatch: any) => {
        await AuthService.sendCode(code).then(res => {

            if (res instanceof Error) {
                Alert.alert(res.message);
                dispatch(failedTeamCode({specGroup: '',teamcode: code}));
                return;
            }
            console.log(res);
            dispatch(successTeamCode({specGroup: res.data.Content,teamcode: code}));
        }
        ).catch( err =>   dispatch(failedTeamCode({specGroup: '',teamcode: code})));
    }
}

