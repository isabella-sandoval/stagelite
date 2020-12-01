
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
                    <div>
                        <a
                            className="job"
                            target="_blank"
                            href="https://github.com/isabella-sandoval/stagelite">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>

                    <div>
                        <a
                            className="job"
                            target="_blank"
                            href="https://www.linkedin.com/in/isabella-sandoval-513025192/">
                            <i class="fab fa-linkedin-in fa-2x"></i>
                        </a>
                    </div>
                    <Link className="create-event" to="/event/new">Create Event</Link>
                    <button className="sign-out-button" onClick={logout}>Log out</button>
                </div>

            </div>
            {/* <hr /> */}
        </div>

    );
  
    const loggedout = (
        <div className="homepage-container">
            <div className="homepage">

                <div className="stagelite-div">
                    <Link to="/" className="stagelite-logo">Stagelite</Link>
                </div>

                <div className="nav-buttons">
                    <div>
                        <a
                            className="job"
                            target="_blank"
                            href="https://github.com/isabella-sandoval/stagelite">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>

                    <div>
                        <a
                            className="job"
                            target="_blank"
                            href="https://www.linkedin.com/in/isabella-sandoval-513025192/">
                            <i class="fab fa-linkedin-in fa-2x"></i>
                        </a>
                    </div>

                    <div a="/login" className="help-dropdown">Help</div>
                    {/* <div className="create-event">Create Event</div> */}

                    <Link className="create-event-loggedout" to="/login">Create Event</Link>
                    <Link className="sign-in-link" to="/login">Sign In</Link>
                </div>

            </div>
            {/* <hr /> */}
        </div>
    );

    return currentUser ? loggedin : loggedout;
}


export default Navigation;