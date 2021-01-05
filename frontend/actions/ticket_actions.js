import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';


export const fetchTickets = userId => dispatch => {
    return TicketApiUtil.fetchTickets(userId)
        .then(tickets => dispatch(receiveTickets(tickets)),
            errors => dispatch(receiveTicketErrors(errors.responseJSON)))
};

export const rsvpTicket = ticket => dispatch => {
    return TicketApiUtil.rsvpTicket(ticket)
        .then(ticket => dispatch(receiveTicket(ticket)),
            errors => dispatch(receiveTicketErrors(errors.responseJSON)))
};


export const deleteTicket = id => dispatch => {
    return TicketApiUtil.deleteTicket(id)
        .then(id => dispatch(removeTicket(id)))
};



export const receiveTicket = ticket => {
    return ({
        type: RECEIVE_TICKET,
        ticket
    })
};

export const receiveTickets = tickets => {
    return ({
        type: RECEIVE_TICKETS,
        tickets
    })
};

export const receiveTicketErrors = errors => {
    return ({
        type: RECEIVE_TICKET_ERRORS,
        errors
    })
};

export const removeTicket = id => {
    return ({
        type: REMOVE_TICKET,
        id
    })
};