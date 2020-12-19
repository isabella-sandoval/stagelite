import {
    RECEIVE_TICKET,
    RECEIVE_TICKETS,
    REMOVE_TICKET
} from '../actions/ticket_actions';

const ticketsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TICKET:
            return Object.assign({}, oldState, { [action.ticket.id]: action.ticket });
        case RECEIVE_TICKETS:
            return Object.assign({}, oldState, action.tickets);
            
        case REMOVE_TICKET:
            delete oldState[action.id];
            return oldState;

        default:
            return oldState;
    }
}

export default ticketsReducer;