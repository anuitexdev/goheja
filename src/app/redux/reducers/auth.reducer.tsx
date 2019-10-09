import AuthDefaultState from "../states/auth.state";

const AuthReducer = (state = AuthDefaultState, action: any) => {

    switch (action.type) {
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                userData: action.userData,
                isLogged: true,
            }
        }
        case "REGISTER_SUCCESS": {
            return {
                ...state,
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
                userType: action.userType
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
        case "CHANGE_LANGUAGE": { 
                                             
            return {
                ...state,
                language: action.language
            }
        }
        case "GET_LANGUAGES_LIST": {           
            return {
                ...state,
                languagesList: action.payload,
            }
        }
        case "ADD_EMAIL_RESET_DATA": {           
            return {
                ...state,
                resetPasswordData:{
                    ...state.resetPasswordData,
                    email: action.email,
                }
            }
        }
        case "RESET_PASSWORD": {           
            return {
                ...state,
                resetPasswordData:{
                    ...state.resetPasswordData,
                    status: action.status,
                }
            }
        }
        default: return { ...state };
    }
}

export default AuthReducer;