
import EventIndex from './event_index';
import { connect } from 'react-redux';

import { fetchEvents } from '../../actions/event_actions';


const mSTP = (state) => ({
    events: state.entities.events,
    errors: state.errors
});


const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),

});

export default connect(mSTP, mDTP)(EventIndex);