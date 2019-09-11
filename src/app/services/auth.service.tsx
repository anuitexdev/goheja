import  enviroment  from "../enviroments/enviroment";
import UserSignInData from "../shared/models/userSignInData";
import axiosInstance from '../shared/interceptors/axios.interceptor';
import { AsyncStorage } from 'react-native';
import UserSignUpData from '../shared/models/userSignUpData';

export class AuthService {

    public setUser(accessToken: string): void {
        AsyncStorage.setItem('accessToken', accessToken)
    }

    public signIn(userData: UserSignInData): Promise<string> {
        
        return axiosInstance.post(`${enviroment.backendUrl}`, userData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public signUp(userData: UserSignUpData): Promise<string> {

        return axiosInstance.post(`${enviroment.backendUrl}/auth/signUp`, userData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
}
export default new AuthService();