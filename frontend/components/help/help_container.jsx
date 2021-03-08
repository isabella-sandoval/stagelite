import { connect } from 'react-redux';
import HelpPopup from './help_popup';


const mSTP = (state, ownProps) => {

    return {
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