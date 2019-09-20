import environment from "../environments/environment";
import UserSignInData from "../shared/models/userSignInData.model";
import axiosInstance from '../shared/interceptors/axios.interceptor';
import { AsyncStorage } from 'react-native';

export class AuthService {

    public setUser(accessToken: string): void {
        AsyncStorage.setItem('accessToken', accessToken)
    }

    public async getUser(): Promise<string | null> {
        return await AsyncStorage.getItem('accessToken');
    }

    public signIn(userData: UserSignInData): Promise<any> {

        return axiosInstance.post(`${environment.backendUrl}Security/`, userData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public signUp(userData: any): Promise<any> {

        return axiosInstance.post(`${environment.backendUrl}Users`, userData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public sendCode(code: string): Promise<any> {

        return axiosInstance.get(`${environment.backendUrl}/General/${code}`)
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