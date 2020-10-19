import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomeContainer from './home/home_container'
import { AuthRoute } from '../util/route_util';

import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => (
        
        <div className="app">
            <HomeContainer/>
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                
            </Switch>
        </div>
);

export default App;