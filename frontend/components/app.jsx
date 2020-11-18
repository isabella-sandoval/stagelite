import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomeContainer from './home/home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Error from './error'
import EventIndexContainer from './events/event_index_container';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-bootstrap/lib/Navbar';
import Navigation from './navigation/navigation';
import NavigationContainer from './navigation/nav_container';
import EventShowContainer from './events/event_show_container';
import CreateEventContainer from './events/create_event_container';


const App = () => (
    <div className="app">
        
            <NavigationContainer/>

            <Switch>
                <Route exact path="/" component={EventIndexContainer} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
                <ProtectedRoute exact path='/event/new' component={CreateEventContainer} formType='new' />
                
                <Route exact path="/events/" component = { EventIndexContainer } />
                
                <Route exact path='/event/:eventId' component={EventShowContainer} />
                <Route exact path='/error' component={Error}/>
                <Redirect to="/error" />

            </Switch>
        </div>
);

export default App;