import CreateGroupDefaultState from '../states/createGroup.state';

const CreateGroupReducer = (state = CreateGroupDefaultState, action: any) => {
    switch (action.type) {
        case "CHANGE_STEP": {
            
            return {
                ...state,
                currentGroupStep: ++state.currentGroupStep,
                clubDTO: {
                    ...state.clubDTO,
                    ...action.payload,
                },
            }
        }
        case "GET_LOCATION": {
            return {
                ...state,
                clubDTO: {
                    ...state.clubDTO,
                    lat: action.payload.lat,
                    lng: action.payload.lng,
                }
            }
        }
        default: return { ...state }
    }
}

export default CreateGroupReducer;