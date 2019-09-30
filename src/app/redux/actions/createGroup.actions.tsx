export const changeStep = (payload: any) => {   
    return { type: 'CHANGE_STEP', payload }
}

export const getLocation = (payload: string) => {
    return { type: 'GET_LOCATION', payload }
}