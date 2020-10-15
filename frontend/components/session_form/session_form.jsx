import React from 'react';
import { receiveErrors } from '../../actions/session_action';
import { Link } from 'react-router-dom';



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
    
                <form onSubmit={this.handleSubmit} className="login-form">
                   
                    <h2 className="form-header">Please {this.props.formType} or {this.props.navLink}</h2>
                                
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="email-input"
                                placeholder="email"
                                />
                                
                               
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="password-input"
                                placeholder="password"
                                />
                        

                        <input className="session-submit" type="submit" value={this.props.formType} />

                </form>
                <div className='error-messages'>{this.props.errors}</div>
                {/* <Link =''>demo user</Link> */}
            </div>
        );
        
    }

}

export default SessionForm;


