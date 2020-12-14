import { connect } from 'react-redux';
import { createEvent, fetchEvent } from '../../actions/event_actions';

import EventForm from './event_form';

const mSTP = (state) => ({
    formType: 'new',
    errors: Object.values(state.errors.events),
    currentUser: state.session.id
});


const mDTP = dispatch => ({
    processForm: event => dispatch(createEvent(event)),
    fetchEvent: id => dispatch(fetchEvent(id))
});


export default connect(mSTP, mDTP)(EventForm);