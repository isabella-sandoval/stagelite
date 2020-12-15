import { combineReducers } from 'redux';
import eventErrorsReducer from './event_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import ticketErrorsReducer from './ticket_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    events: eventErrorsReducer,
    tickets: ticketErrorsReducer
    
});

export default errorsReducer;