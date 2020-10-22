import {
    RECEIVE_EVENT_ERRORS,
    RECEIVE_EVENT } from '../actions/event_actions';

const eventErrorsReducer = (oldState = [], action) => {

    switch (action.type) {
        case RECEIVE_EVENT_ERRORS:
            return Object.assign([], action.errors);
        case RECEIVE_EVENT:
            return [];

        default:
            return oldState;
    }
}

export default eventErrorsReducer;