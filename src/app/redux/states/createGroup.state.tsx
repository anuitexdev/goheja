let CreateGroupDefaultState = {
    currentGroupStep: 1,
    clubData: {
        clubName: '',
        avatarSource: '',
    },
    clubDTO: {
        name: '',
        code: '',
        lat: null,
        lng: null,
        radius: null,
        imgPath: '',
        weekWorkDays:[],
        startOfDay: null,
        endOfDay: null,
        firstDayInWeek: null
    },
    location: ''
}

export default CreateGroupDefaultState;