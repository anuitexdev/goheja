import { environment } from "../enviroments/enviroment.prod";
import UserSignInData from "../shared/models/userSignInData";
import axiosInstance from '../shared/interceptors/axios.interceptor';

export class AuthService {
    public signIn(userData: UserSignInData): Promise<string> {
        //test
        return axiosInstance.post(`${environment.backendUrl}/auth/signIn`, userData)
          .then(function (response) {
            console.log(response);
            return response;
          })
          .catch(function (error) {
            console.log(error);
            return error;
          });
        //
        // return fetch(`${environment.backendUrl}/auth/signIn`, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(userData)
        // }).then(res => res.json());
    }

    public signUp(userData: any): Promise<string> {

        return axiosInstance.post(`${environment.backendUrl}/auth/signUp`, userData)
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
        // return fetch(`${environment.backendUrl}/auth/signUp`, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(userData)
        // }).then(res => res.json());
    }
}
export default new AuthService();