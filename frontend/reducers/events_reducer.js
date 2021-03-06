import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT } from '../actions/event_actions';

const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch ( action.type ) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            return Object.assign({}, oldState, { [action.event.id]: action.event });
        case REMOVE_EVENT:
            delete nextState[action.id];
            return nextState;

        default:
            return oldState;
    }
}

export default eventsReducer;



