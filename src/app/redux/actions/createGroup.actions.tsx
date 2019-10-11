import  CoachGroupService  from '../../services/coachGroup.service';
import { Alert } from 'react-native';
export const changeStep = (payload: any) => {
    return { type: 'CHANGE_STEP', payload }
}

export const getLocation = (payload: string) => {
    return { type: 'GET_LOCATION', payload }
}

export const registerGroup = (groupData: any) => {
    return async (dispatch: any) => {
        await CoachGroupService.createGroup(groupData).then(res => {
            console.log(res);

  
            // dispatch(successAuth('', 'register'));
        }
        )
    }
}