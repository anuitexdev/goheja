import ModalDefaultState from "../states/modal.state";

const ModalReducer = (state = ModalDefaultState, action: any) => {

    switch (action.type) {
        case "CLOSE_MODAL": {
            return {
                ...state,
                openModal: false,
            }
        }
        case "OPEN_MODAL": {
            return {
                ...state,
                openModal: true,
            }
        }
        case "CHANGE_RUNNING_MODAL": {  
              
            return {                    
                ...state,
                runningModalNumber: 1 + state.runningModalNumber,
                runningData: {
                    ...state.runningData,
                    ...action.payload
                }
            }
        }
        case "CHANGE_CYCLING_MODAL": {
            return {                    
                ...state,
                cyclingModalNumber: 1 + state.cyclingModalNumber,
                cyclingData: {
                    ...state.cyclingData,
                    ...action.payload,
                }
                
            }
        }
        case "CHANGE_SWIMMING_MODAL": {    
            return {                    
                ...state,
                swimmingModalNumber: 1 + state.swimmingModalNumber,
                swimmingData: {
                    ...state.swimmingData,
                    ...action.payload,
                }
                
            }
        }
        case "SET_SPORT_TYPE": {
            return {
                ...state,
                selectedSport: action.payload,
            }
        }

        default: return { ...state };
    }
}

export default ModalReducer;