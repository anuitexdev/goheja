let AuthDefaultState = {
    userToken: '',
    isWelcomeScreen: true,
    isLogged: false,
    currentStep: 0,

    signUpData:{
        userType: -1,
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