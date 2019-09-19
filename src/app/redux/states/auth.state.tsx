let AuthDefaultState = {
    userToken: '',
    isWelcomeScreen: true,
    isLogged: false,
    role: '',
    currentStep: 1,
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