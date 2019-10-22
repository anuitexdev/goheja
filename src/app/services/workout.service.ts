import axiosInstance from '../shared/interceptors/axios.interceptor';
import Config from 'react-native-config';

export default class WorkoutService {

    public getChartData(): Promise<any> {
        const testData: any = {
            workoutId:"5da6d55955ec451b68fc0ae3", 
            userId:"5b96853cdd6505dd6ba78a8c",
            specGroup:"TestEnv",
           }
           console.log(testData);
           
        return axiosInstance.get(`${Config.API_URL}WorkOuts`, testData)
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

// export default new WorkoutService();