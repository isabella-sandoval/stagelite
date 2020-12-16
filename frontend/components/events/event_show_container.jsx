import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { rsvpTicket } from '../../actions/ticket_actions'

const mSTP = (state, ownProps) => {
    
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        // fetchTickets: userId => dispatch(fetchTickets(userId)),
        // fetchEvents: () => dispatch(fetchEvents()),
        rsvpTicket: (ticket) => dispatch(rsvpTicket(ticket))
    };
};



export default connect(mSTP, mDTP)(EventShow);