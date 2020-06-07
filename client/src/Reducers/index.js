import scoreReducer from './score';
import userReducer from './user'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    score : scoreReducer,
    user : userReducer,
});

export default rootReducer;