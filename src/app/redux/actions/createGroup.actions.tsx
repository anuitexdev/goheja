import  CoachGroupService  from '../../services/coachGroup.service';
import Google from '../../services/google.service';
export const changeStep = (payload: any) => {
    return { type: 'CHANGE_STEP', payload }
}

export const getLocation = (payload: any) => {
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

export const googleLocation = (address: any) => {
    return async (dispatch: any) => {
        await Google.getAddress(address).then((res: any) => {
            const location = res.results[0].geometry.location;
            dispatch(getLocation(location))
        }).catch((error:any) => console.log(error))
    }
}