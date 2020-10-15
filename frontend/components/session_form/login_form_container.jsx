import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { receiveErrors } from '../../actions/session_action';
import { login } from '../../actions/session_action';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'log in',
        navLink: <Link className="to-signup" to="/signup">sign up</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    };
};


export default connect(mSTP, mDTP)(SessionForm);