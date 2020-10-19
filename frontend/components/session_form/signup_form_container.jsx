import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_action';
import { receiveErrors, clearErrors } from '../../actions/session_action';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign up',
        navLink: <Link className="to-login" to="/login">log in</Link>,
        demoUser: { email: 'demo@user', password: 'password'},
    };
};

const mDTP = dispatch => {
    return {
        processloginForm: (user) => dispatch(login(user)),
        processForm: (user) => dispatch(signup(user)),
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        clearErrors: () => dispatch(clearErrors()),
        
    };
};

export default connect(mSTP, mDTP)(SessionForm);