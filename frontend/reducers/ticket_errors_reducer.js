import { RECEIVE_TICKET_ERRORS, RECEIVE_TICKET } from '../actions/ticket_actions';

const ticketErrorReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TICKET_ERRORS:
            return Object.assign([], action.errors);

        case RECEIVE_TICKET:
            return [];

        default:
            return oldState;
    }
}

export default ticketErrorReducer;