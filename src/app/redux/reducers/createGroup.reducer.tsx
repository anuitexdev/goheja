import CreateGroupDefaultState from '../states/createGroup.state';

const CreateGroupReducer = (state = CreateGroupDefaultState, action: any) => {
    switch (action.type) {
        case "CHANGE_STEP": {
            console.log(state)
            return {
                ...state,
                currentGroupStep: ++state.currentGroupStep,
                clubDTO: {
                    ...state.clubDTO,
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