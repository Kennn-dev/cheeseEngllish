//Store state of User here 
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
//createStore(reducer, [preloadedState], [enhancer])

const initState = {}; 

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(...middleware)
    );

export default store;