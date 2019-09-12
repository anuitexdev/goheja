import environment from "../environments/environment";
import UserSignInData from "../shared/models/userSignInData.model";
import axiosInstance from '../shared/interceptors/axios.interceptor';
import { AsyncStorage } from 'react-native';
import UserSignUpData from '../shared/models/userSignUpData.model';

export class AuthService {

    public setUser(accessToken: string): void {
        AsyncStorage.setItem('accessToken', accessToken)
    }

    public async getUser(): Promise<string | null> {
        return await AsyncStorage.getItem('accessToken');
    }

    public signIn(userData: UserSignInData): Promise<any> {

        return axiosInstance.post(`${environment.backendUrl}`, userData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public signUp(userData: UserSignUpData): Promise<any> {

        return axiosInstance.post(`${environment.backendUrl}/auth/signUp`, userData)
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