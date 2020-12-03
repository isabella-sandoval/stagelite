import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';

import EventForm from './event_form';

const mSTP = (state) => ({
    formType: 'create',
    errors: state.errors.events
});


const mDTP = dispatch => ({
    processForm: event => dispatch(createEvent(event)),
    fetchEvent: id => dispatch(fetchEvent(id))
});


export default connect(mSTP, mDTP)(EventForm);