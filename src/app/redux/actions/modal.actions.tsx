

export const modalClose = () => {
    return {type: 'CLOSE_MODAL'}
}
export const modalOpen = () => {    
    return {type: 'OPEN_MODAL'}
}

export const changeRunningModal = (payload: any) => {
    return {type: 'CHANGE_RUNNING_MODAL', payload}
}
export const changeCyclingModal = (payload: any) => {
    return {type: 'CHANGE_CYCLING_MODAL', payload}
}
export const changeSwimmingModal = (payload: any) => {
    return {type: 'CHANGE_SWIMMING_MODAL', payload}
}
export const setSportType = (payload: string) => {
    return {type: 'SET_SPORT_TYPE', payload}
}
