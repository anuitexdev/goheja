
let ModalDefaultState = {
    openModal: false,
    runningModalNumber: 1,
    cyclingModalNumber: 1,
    swimmingModalNumber: 1,
    selectedSport: '',
    sportConfigDone: false,
    cyclingData: {
        ftp: 0,
        threshold: 0,
        maxSpeed: 0,
        rock: 0,
    },
    runningData: {
        lactate: 0,
        pace: '',
        achievements: '',
        awesome: '',
        rock: 0
    },
    swimmingData: {
        threshold: '',
        swimTimie: ''
    }

}

export default ModalDefaultState;