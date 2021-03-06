import { connect } from 'react-redux';
import { updateEvent, fetchEvent, deleteEvent, fetchEvents } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = (state, ownProps) => ({
    formType: 'edit',
    errors: Object.values(state.errors.events),
    eventId: ownProps.match.params.eventId,
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    processForm: event => dispatch(updateEvent(event)),
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchEvents: () => dispatch(fetchEvents()),
    updateEvent: eventId => dispatch(updateEvent(eventId)),
    deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mSTP, mDTP)(EventForm);