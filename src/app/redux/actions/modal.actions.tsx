

export const modalClose = () => {
    return {type: 'CLOSE_MODAL'}
}
export const modalOpen = () => {    
    return {type: 'OPEN_MODAL'}
}

export const changeModal = (payload: number) => {
    return {type: 'CHANGE_MODAL', payload}
}
export const setSportType = (payload: string) => {
    return {type: 'SET_SPORT_TYPE', payload}
}
