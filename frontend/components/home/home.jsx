import { connect } from "react-redux";
import React from "react";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="homepage">

                <Link className="sign-in-link" to="/signup">Sign In</Link>
                <div className="create-event">Create Event</div>
                <div className="help-dropdown">Help</div>

                <img src="Stagelite.png" className="logo"/>
            </div>
        );
    }
}

export default HomePage;

