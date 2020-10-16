import { connect } from "react-redux";
import React from "react";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="homepage-container">
                <div className="homepage">

                    <div className="stagelite-div">
                        <Link to="/" className="stagelite-logo">Stagelite</Link>
                    </div>

                    <div className="nav-buttons">
                        <div className="help-dropdown">Help</div>
                        <div className="create-event">Create Event</div>
                        <Link className="sign-in-link" to="/signup">Sign In</Link>
                    </div>

                </div>
                <hr/>
            </div>
        );
    }
}

export default HomePage;

