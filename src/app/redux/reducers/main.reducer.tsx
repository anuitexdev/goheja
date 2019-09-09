
const MainReducer = (state = {}, action: any) => {
    switch(action.type) {
        case "SIGNUP_SUCCESS": {
            return {
                ...state,
              
            }
        }
        case "SAVE_HASHED": {
            return {
                ...state,
             
            }
        }
        default: return { ...state }
    }
}

export default MainReducer;