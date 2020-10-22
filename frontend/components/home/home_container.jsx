import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, logout } from '../../actions/session_action';
import HomePage from './home'
import { fetchEvents } from '../../actions/event_actions';



const mSTP = state => {
    return(
    {navLink: <Link className="to-signup" to="/signup">sign up</Link>,
    currentUser: state.entities.users[state.session.id]}
    )
};

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    fetchEvents: (id) => dispatch(fetchEvents(id)) 
});

export default connect(mSTP, mDTP)(HomePage);