import AuthDefaultState from "../states/auth.state";

const AuthReducer = (state = AuthDefaultState, action: any) => {
    switch (action.type) {
        case "SIGNIN_SUCCESS": {
            return {
                ...state,
                userToken: action.userToken
            }
        }
        case "SIGNIN_FAILED": {
            return {
                ...state,
                userToken: action.err
            }
        }
        default: return { ...state };
    }
}

export default AuthReducer;