
import EventIndex from './event_index';
import { connect } from 'react-redux';

import { fetchEvents } from '../../actions/event_actions';
import { fetchTickets } from '../../actions/ticket_actions'

const mSTP = (state) => ({
    events: state.entities.events,
    errors: state.errors,
    currentUser: state.session.id
});


const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchTickets: (userId) => dispatch(fetchTickets(userId))

});

export default connect(mSTP, mDTP)(EventIndex);