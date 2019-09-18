import AuthDefaultState from "../states/auth.state";

const AuthReducer = (state = AuthDefaultState, action: any) => {

    switch (action.type) {
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                userToken: action.userToken,
                isLogged: true,
            }
        }
        case "AUTH_FAILED": {
            return {
                ...state,
                userToken: action.err,
                isLogged: false,
            }
        }
        case "CHANGE_SCREEN": {
            return {
                ...state,
                isWelcomeScreen: false,
                role: action.role
            }
        }
        case "CHANGE_STEP": {
            return {
                ...state,
                currentStep: action.currentStep
            }
        }
        default: return { ...state };
    }
}

export default AuthReducer;