import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';

const mSTP = (state, ownProps) => {
    
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        fetchEvent: (id) => dispatch(fetchEvent(id))
    };
};



export default connect(mSTP, mDTP)(EventShow);