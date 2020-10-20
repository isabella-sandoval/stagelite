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
        this.demo = this.demo.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
        // document.addEventListener("keydown", this.escFunction);
    }

    update(field) {
        // debugger
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    demo(){
        const demoUser = {email: 'demo@user', password: 'password'};
        this.props.processloginForm(demoUser);   
    }


    renderErrors() {
        const errors = this.props.errors;
        return (
            <ul>
                {errors.map((error, i) => (<li key={`error-${i}`}>{error}</li>))}
            </ul>
        );
    }


    render() {

        return (

            <div className="session-form-container">
    
                <form onSubmit={this.handleSubmit} className="login-form">
                   <p className="s-logo">S</p>
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
        
                <div className='error-messages'>{this.renderErrors()}</div>
                <button className="demo-button" onClick={this.demo}>demo user</button>
            </div>
        );
        
    }

}

export default SessionForm;


