import axiosInstance from '../shared/interceptors/axios.interceptor';
import ClubDataModel from '../shared/models/clubData.model';
import Config from 'react-native-config';

 class CoachGroupService {

    public createGroup(groupData: ClubDataModel): Promise<any> {
        return axiosInstance.post(`${Config.API_URL}Clubes`, groupData)
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

export default new CoachGroupService();