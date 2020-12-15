
import { connect } from "react-redux";
import MyTickets from "./my_tickets";
import { fetchTickets } from '../../actions/ticket_actions';
import { fetchEvents } from '../../actions/event_actions';

const mSTP = state => {
    return ({
        currentUser: state.session.id,
        tickets: Object.values(state.entities.tickets),
        events: state.entities.events
    })
};

const mDTP = dispatch => {
    return ({
        fetchTickets: userId => dispatch(fetchTickets(userId)),
        fetchEvents: () => dispatch(fetchEvents())
    })
};

export default connect(mSTP, mDTP)(MyTickets);