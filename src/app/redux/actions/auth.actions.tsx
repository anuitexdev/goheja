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
export const getLanguages = (payload: any) => {
    return { type: 'GET_LANGUAGES_LIST', payload}
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
                Alert.alert('Received empty object from API');
                dispatch(failedAuth(res));
                return;
            }
            dispatch(successAuth(res, 'login'));
        });
    }
}

export const changeLang = (language: string) => {
  
    return { type: 'CHANGE_LANGUAGE',language}
 
    
}
export const getAllLanguages = () => {
    return async (dispatch: any) => {
        await AuthService.getAllLanguages().then(res => {

            if (res instanceof Error) {
                Alert.alert('doesnt have language');
                // dispatch(failedAuth(res));
                return;
            }
            dispatch(getLanguages( res.data));
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

