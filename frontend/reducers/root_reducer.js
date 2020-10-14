import {combineReducers} from 'redux';
import session_reducer from './session_reducer'
import entitiesReducer from './entities_reducer'
import errorsReducer from './errors_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: session_reducer,
    errors: errorsReducer,
})

export default rootReducer;
