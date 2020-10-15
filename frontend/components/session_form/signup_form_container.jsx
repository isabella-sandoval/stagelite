import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_action';
import { receiveErrors } from '../../actions/session_action';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign up',
        navLink: <Link className="login" to="/login">log in</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    };
};

export default connect(mSTP, mDTP)(SessionForm);