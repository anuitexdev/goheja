let AuthDefaultState = {
    userToken: '',
    isWelcomeScreen: true,
    isLogged: false,
    currentStep: 0,
    coachCurrentStep: 0,
    language: 'English',
    translation: '',
    userType: -1,
    coachSignUpData:{
        firstname: '',
        lastName: '',
        auth: '',
        phone: '',
        password: '',
        units: '',
        gender: '',
        height: '',
        weight: '',
        fat: '',
        dob: '',
    },

    signUpData:{
        firstname: '',
        lastName: '',
        auth: '',
        password: '',
        dob: '',
        gender: 0,
        units: '',
        height: '',
        weight: '',
        fat: '',
        teamcode: '',
        specGroup: '',
    }
}

export default AuthDefaultState;