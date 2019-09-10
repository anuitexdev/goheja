import { environment } from "../enviroments/enviroment.prod";
import UserSignInData from "../shared/models/userSignInData";
import axiosInstance from '../shared/interceptors/axios.interceptor';
import UserSignUpData from '../shared/models/userSignUpData';

export class AuthService {
    public signIn(userData: UserSignInData): Promise<string> {

        return axiosInstance.post(`${environment.backendUrl}/auth/signIn`, userData)
          .then((response) =>  {
            console.log(response);
            return response;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
    }

    public signUp(userData: UserSignUpData): Promise<string> {

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