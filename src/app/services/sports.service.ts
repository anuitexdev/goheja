import axiosInstance from '../shared/interceptors/axios.interceptor';
import SportConfigData from '../shared/models/sportConfigData.model';
import Config from 'react-native-config';

export class SportService {

    public setSportConfig(SportConfigData: SportConfigData): Promise<any> {
        return axiosInstance.post(`${Config.API_URL}Users/TestEnv`, SportConfigData)
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