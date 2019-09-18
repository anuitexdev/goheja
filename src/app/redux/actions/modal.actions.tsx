

export const modalClose = () => {
    return {type: 'CLOSE_MODAL'}
}
export const modalOpen = () => {    
    return {type: 'OPEN_MODAL'}
}

export const changeRunningModal = (payload: number) => {
    return {type: 'CHANGE_RUNNING_MODAL', payload}
}
export const changeCyclingModal = (payload: number) => {
    return {type: 'CHANGE_CYCLING_MODAL', payload}
}
export const changeSwimmingModal = (payload: number) => {
    return {type: 'CHANGE_SWIMMING_MODAL', payload}
}
export const setSportType = (payload: string) => {
    return {type: 'SET_SPORT_TYPE', payload}
}
