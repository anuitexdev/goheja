import AuthDefaultState from "../states/auth.state";

const AuthReducer = (state = AuthDefaultState, action: any) => {
    switch (action.type) {
        case "AUTH_SUCCESS": {
            return {
                ...state,
                userToken: action.userToken
            }
        }
        case "AUTH_FAILED": {
            return {
                ...state,
                userToken: action.err
            }
        }
        default: return { ...state };
    }
}

export default AuthReducer;