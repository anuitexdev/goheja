import environment from '../environments/environment';
import axiosInstance from '../shared/interceptors/axios.interceptor';
import ClubDataModel from '../shared/models/clubData.model';

 class CoachGroupService {

    public createGroup(groupData: ClubDataModel): Promise<any> {
        return axiosInstance.post(`${environment.backendUrl}Clubes`, groupData)
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