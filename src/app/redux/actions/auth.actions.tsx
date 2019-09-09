import AuthService from '../../services/auth.service'
import UserSignInData from 'src/app/shared/models/userSignInData';

export function sucsessSignIn(userToken: string) {
    return { type: 'SIGNIN_SUCCESS', userToken };
}

export function failedSignIn(err: any) {
    return { type: 'SIGNIN_FAILED', err }
}

export function signIn(userData: UserSignInData) {
    return async (dispatch: any) => {
        await AuthService.signIn(userData).then(res => {
            dispatch(sucsessSignIn(res));
        }
        ).catch(err => {
            dispatch(failedSignIn(err));

        })
    }
}