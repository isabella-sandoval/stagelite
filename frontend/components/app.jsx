import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomeContainer from './home/home_container'
import { AuthRoute } from '../util/route_util';
import Error from './error'
import EventIndexContainer from './events/event_index_container';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-bootstrap/lib/Navbar';
import Navigation from './navigation/navigation';
import NavigationContainer from './navigation/nav_container';

const App = () => (
    <div className="app">
        
            <NavigationContainer/>

            <Switch>
                <Route exact path="/" component={EventIndexContainer} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />

                {/* <Route exact path="/events/new" component={EventFormContainer} />
                <Route path="/events/" component = { EventIndexContainer } />
                <Route path="/events/:eventId" component={EventShowContainer} /> */}
                
                <Route exact path='/error' component={Error}/>
                <Redirect to="/error" />

            </Switch>
        </div>
);

export default App;