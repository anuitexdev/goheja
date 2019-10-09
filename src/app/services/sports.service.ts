import environment from '../environments/environment';
import axiosInstance from '../shared/interceptors/axios.interceptor';
import SportConfigData from '../shared/models/sportConfigData.model';

export class SportService {

    public setSportConfig(SportConfigData: SportConfigData): Promise<any> {
        return axiosInstance.post(`${environment.backendUrl}Users/TestEnv`, SportConfigData)
                .then((response) => {
                    console.log(response)
                    return response
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
    }
    
}

export default new SportService();