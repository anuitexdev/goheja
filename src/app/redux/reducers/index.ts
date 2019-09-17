import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import ModalReducer from './modal.reducer';

const reducers = combineReducers({
    AuthReducer,
    ModalReducer
});
export default reducers;