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

        default: return { ...state };
    }
}

export default ModalReducer;