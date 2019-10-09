import CreateGroupDefaultState from '../states/createGroup.state';

const CreateGroupReducer = (state = CreateGroupDefaultState, action: any) => {
    switch (action.type) {
        case "CHANGE_STEP": {
            return {
                ...state,
                currentGroupStep: ++state.currentGroupStep,
                clubData: {
                    ...state.clubData,
                    ...action.payload,
                }
            }


        }
        case "GET_LOCATION": {
            return {
                ...state,
                location: action.payload
            }
        }
        default: return { ...state }
    }
}

export default CreateGroupReducer;