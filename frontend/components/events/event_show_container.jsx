import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, deleteEvent, fetchEvents } from '../../actions/event_actions';
import { rsvpTicket, fetchTickets } from '../../actions/ticket_actions'

const mSTP = (state, ownProps) => {
    
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        fetchEvents: () => dispatch(fetchEvents()),
        deleteEvent: id => dispatch(deleteEvent(id)),
        rsvpTicket: (ticket) => dispatch(rsvpTicket(ticket)),
        fetchTickets: userId => dispatch(fetchTickets(userId))
    };
};



export default connect(mSTP, mDTP)(EventShow);