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
        case "SUCCESS_GROUP_CODE": {
            return {
                ...state,
                signUpData: {
                    ...state.signUpData,
                    specGroup: action.data.specGroup,
                    teamcode: action.data.teamcode,
                }
            }
        }
        case "FAILED_GROUP_CODE": {
            return {
                ...state,
                signUpData: {
                    ...state.signUpData,
                    specGroup: action.data.specGroup,
                    teamcode: action.data.teamcode,
                }
            }
        }
        case "CHANGE_SCREEN": {
            return {
                ...state,
                isWelcomeScreen: false,
                signUpData: {
                    ...state.signUpData,
                    userType: action.userType
                }
            }
        }
        case "CHANGE_STEP": {
            return {
                ...state,
                currentStep: ++state.currentStep,
                signUpData: {
                    ...state.signUpData,
                    ...action.payload,
                }
            }
        }
        case "CHANGE_COACH_STEP": {     
            return {
                ...state,
                coachCurrentStep: ++state.coachCurrentStep,
                coachSignUpData: {
                    ...state.coachSignUpData,
                    ...action.payload,
                }
            }
        }
        default: return { ...state };
    }
}

export default AuthReducer;