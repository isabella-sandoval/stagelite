import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => (
        
        <div className="app">
            <Switch>
                <Route path='/login' component={LoginFormContainer} />
                <Route path='/signup' component={SignupFormContainer} />
            </Switch>
        </div>
);

export default App;