import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, logout } from '../../actions/session_action';

import Navigation from './navigation';


const mSTP = state => {

  return (
    {
      navLink: <Link className="to-signup" to="/signup">sign up</Link>,
      currentUser: state.entities.users[state.session.id]
    }
  )
};

const mDTP = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navigation);