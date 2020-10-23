
import React from "react";
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, logout }) => {
    const loggedin = (
        <div className="homepage-container">
            <div className="homepage">

                <div className="stagelite-div">
                    <Link to="/" className="stagelite-logo">Stagelite</Link>
                </div>

                <div className="nav-buttons">
                    <div className="help-dropdown">Help</div>
                    <Link className="create-event" to="/event/new">Create Event</Link>
                    <button className="sign-out-button" onClick={logout}>Log out</button>
                </div>

            </div>
            <hr />
        </div>

    );
  
    const loggedout = (
        <div className="homepage-container">
            <div className="homepage">

                <div className="stagelite-div">
                    <Link to="/" className="stagelite-logo">Stagelite</Link>
                </div>

                <div className="nav-buttons">
                    <div a="/login" className="help-dropdown">Help</div>
                    {/* <div className="create-event">Create Event</div> */}

                    <Link className="create-event" to="/login">Create Event</Link>
                    <Link className="sign-in-link" to="/login">Sign In</Link>
                </div>

            </div>
            <hr />
        </div>
    );

    return currentUser ? loggedin : loggedout;
}


export default Navigation;