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
            // debugger
            return action.tickets
        case REMOVE_TICKET:
            let newState = Object.assign({}, oldState)
            delete newState[action.id];
            return newState;
        default:
            return oldState;
    }
}

export default ticketsReducer;