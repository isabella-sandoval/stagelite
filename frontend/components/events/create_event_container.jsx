import { connect } from 'react-redux';
import { createEvent, fetchEvent, fetchEvents } from '../../actions/event_actions';

import EventForm from './event_form';

const mSTP = (state, ownProps) => ({
    formType: 'new',
    events: Object.values(state.entities.events),
    errors: Object.values(state.errors.events),
    eventId: ownProps.match.params.eventId,
    currentUser: state.session.id
});


const mDTP = dispatch => ({
    processForm: event => dispatch(createEvent(event)),
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchEvents: () => dispatch(fetchEvents())
});


export default connect(mSTP, mDTP)(EventForm);