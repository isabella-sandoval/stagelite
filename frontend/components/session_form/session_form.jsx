import React from 'react';
import { receiveErrors } from '../../actions/session_action';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(success => { this.props.history.push("/") })
    }

    render() {
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1>Welcome to Stagelite</h1>
                        
                    <h2>Please {this.props.formType} or {this.props.navLink}</h2>

                    <div className="login-form">
                        <label>Email:
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                      
                        <label>Password:
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
                <div>{this.props.errors}</div>
            </div>
        );
    }

}

export default SessionForm;