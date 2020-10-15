import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_action';
import HomePage from './home'


const mSTP = state => ({
    navLink: <Link className="to-signup" to="/signup">sign up</Link>,
    
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(HomePage);