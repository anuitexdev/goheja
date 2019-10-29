import UserSignInData from "../shared/models/userSignInData.model";
import axiosInstance from '../shared/interceptors/axios.interceptor';
import { AsyncStorage } from 'react-native';
import ResetPasswordData from "../shared/models/resetPasswordData.model";
import Config from 'react-native-config';

export class AuthService {

    public setUser(accessToken: string): void {
        AsyncStorage.setItem('accessToken', accessToken)
    }

    public async getUser(): Promise<string | null> {
        return await AsyncStorage.getItem('accessToken');
    }

    public signIn(userData: UserSignInData): Promise<any> {

        return axiosInstance.post(`${Config.API_URL}Security/`, userData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public checkEmail(email: any): Promise<any> {
        console.log(`${Config.API_URL}Users`)
        console.log(email);
        return axiosInstance.get(`https://go-heja.com/testweb/api/Users`,  {params: email})
            .then((response) => {
                console.log(response);
                return response 
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public signUp(userData: any): Promise<any> {
        return axiosInstance.post(`${Config.API_URL}Users`, userData)
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
        return axiosInstance.get(`${Config.API_URL}General/${code}`)
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
        return axiosInstance.post(`${Config.API_URL}languages/${language}`)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    public getAllLanguages(): Promise<any> {
        return axiosInstance.post(`${Config.API_URL}languages/getall`)
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
        return axiosInstance.put(`${Config.API_URL}Users`, resetData)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    public confirmMail(email: string): Promise<any> {
        return axiosInstance.get(`${Config.API_URL}General/confirmation?mail=${email}`)
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