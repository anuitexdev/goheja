import { combineReducers } from 'redux';
import AuthReducer from './auth.reducer';
import ModalReducer from './modal.reducer';
import CreateGroupReducer from './createGroup.reducer';

const reducers = combineReducers({
    AuthReducer,
    ModalReducer,
    CreateGroupReducer,
});
export default reducers;