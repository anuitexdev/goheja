import AuthService from '../../services/auth.service'
import UserSignInData from 'src/app/shared/models/userSignInData';
import UserSignUpData from '../../shared/models/userSignUpData';

export const sucsessAuth = (userToken: string) => {
    return { type: 'AUTH_SUCCESS', userToken };
}

export const failedAuth = (err: any) => {
    return { type: 'AUTH_FAILED', err }
}

export const signIn = (userData: UserSignInData) => {
    return async (dispatch: any) => {
        await AuthService.signIn(userData).then(res => {
            dispatch(sucsessAuth(res));
        }
        ).catch(err => {
            dispatch(failedAuth(err));
        });
    }
}

export const signUp = (userData: UserSignUpData) => {
    return async (dispatch: any) => {
        await AuthService.signUp(userData).then(res => {
            dispatch(sucsessAuth(res));
        }
        ).catch(err => {
            dispatch(failedAuth(err));
        })
    }
}

export const changeScreen = () => {
    return { type: 'CHANGE_SCREEN' };
}