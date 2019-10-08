import SportConfigData from '../../shared/models/sportConfigData.model';
import  SportService  from '../../services/sports.service';
import { Alert } from 'react-native';


export const modalClose = () => {
    return {type: 'CLOSE_MODAL'}
}
export const modalOpen = () => {    
    return {type: 'OPEN_MODAL'}
}

export const changeRunningModal = (payload: any) => {
    return {type: 'CHANGE_RUNNING_MODAL', payload}
}
export const changeCyclingModal = (payload: any) => {
    return {type: 'CHANGE_CYCLING_MODAL', payload}
}
export const changeSwimmingModal = (payload: any) => {
    return {type: 'CHANGE_SWIMMING_MODAL', payload}
}
export const setSportType = (payload: string) => {
    return {type: 'SET_SPORT_TYPE', payload}
}
export const successSportConfig = (payload: boolean) => {
    return {type: 'SUCCESS_SPORT_CONFIG', payload}
}

export const setSportConfig = (sportConfigData: SportConfigData) => {
    return async (dispatch: any) => {
        await SportService.setSportConfig(sportConfigData).then(res => {
            if(res instanceof Error) {
                Alert.alert(res.message);
                return;
            }
            if(!res.data) {
                Alert.alert('Empty object fromo api');
                return;
            }
            dispatch(successSportConfig(true))
        })
    }
}

