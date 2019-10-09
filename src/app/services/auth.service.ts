import environment from "../environments/environment";
import UserSignInData from "../shared/models/userSignInData.model";
import axiosInstance from '../shared/interceptors/axios.interceptor';
import { AsyncStorage } from 'react-native';
import ResetPasswordData from "../shared/models/resetPasswordData.model";
// import * as RNFS from 'react-native-fs';

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

    public getLanguage(language: string): Promise<any> {
        return axiosInstance.post(`${environment.backendUrl}/languages/${language}`)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    public getAllLanguages(): Promise<any> {
        return axiosInstance.post(`${environment.backendUrl}/languages/getall`)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    public resetPassword(resetData: ResetPasswordData): Promise<any> {
        return axiosInstance.put(`${environment.backendUrl}/Users`, resetData)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    }

    public confirmMail(email: string): Promise<any>{
        return axiosInstance.post(`${environment.backendUrl}/General/confirmation/${email}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })

    }
}
export default new AuthService();