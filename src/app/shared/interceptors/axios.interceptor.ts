import axios from 'axios';
import promise from 'promise';
import {AsyncStorage} from 'react-native';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use( async (config) => {

  const accessToken = await AsyncStorage.getItem('accessToken');


  if (accessToken) {
    if (config.method !== 'OPTIONS') {
          config.headers.authorization = accessToken;
        }
  }
  return config;
},  (error) => {

   return promise.reject(error);
});

export default axiosInstance;