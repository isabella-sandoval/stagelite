import {combineReducers} from 'redux';
import users_reducer from './users_reducer';
import session_reducer from './session_reducer'


const rootReducer = combineReducers({
    users: users_reducer,
    session: session_reducer
})

export default rootReducer;
