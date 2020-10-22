import { combineReducers } from 'redux';
import eventErrorsReducer from './event_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    events: eventErrorsReducer,
});

export default errorsReducer;