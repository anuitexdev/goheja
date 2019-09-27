let AuthDefaultState = {
    userToken: '',
    isWelcomeScreen: true,
    isLogged: false,
    currentStep: 0,
    coachCurrentStep: 0,
    language: 'English',
    userType: -1,
    languagesList: {Eng: 'English'},
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
        bodyfat: '',
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
        bodyfat: '',
        teamcode: '',
        specGroup: '',
    }
}

export default AuthDefaultState;