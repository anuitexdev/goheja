let AuthDefaultState = {
    userToken: '',
    isWelcomeScreen: true,
    isLogged: false,
    role: '',
    currentStep: 0,
    signUpData:{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthDate: '',
        gender: '',
        units: '',
        height: '',
        weight: '',
        fat: '',
        
    }
}

export default AuthDefaultState;