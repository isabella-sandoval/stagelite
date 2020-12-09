import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import Search from './search';
import { withRouter } from 'react-router-dom'


const mSTP = (state) => ({
    events: Object.values(state.entities.events),
    errors: Object.values(state.errors)
});


const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())

});

export default withRouter(connect(mSTP, mDTP)(Search));