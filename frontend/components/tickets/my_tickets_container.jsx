
import { connect } from "react-redux";
import MyTickets from "./my_tickets";
import { fetchTickets, deleteTicket } from '../../actions/ticket_actions';
import { fetchEvents } from '../../actions/event_actions';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        tickets: Object.values(state.entities.tickets),
        errors: Object.values(state.errors.tickets),
        events: Object.values(state.entities.events)
    })
};

const mDTP = dispatch => {
    return ({
        fetchTickets: userId => dispatch(fetchTickets(userId)),
        fetchEvents: () => dispatch(fetchEvents()),
        deleteTicket: id => dispatch(deleteTicket(id))
    })
};

export default connect(mSTP, mDTP)(MyTickets);