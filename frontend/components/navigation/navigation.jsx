
import React from 'react';
import { Link } from 'react-router-dom';
import UserNavigation from '../user_navigation/user_navigation';
import SearchBarContainer from '../search/search_bar_container';
import { render } from 'react-dom';

const Navigation = ({ currentUser, logout }) => {
    render(){
        if currentUser ? 
        return(
            return currentUser?
        <section className="main-nav">
           
            <ul className='main-nav-options'>
                <Link className='nav-link' to='/'>Log</Link>
            </ul>
        </section>
        );

<ul className='main-nav-options'>
    <Link className='nav-link' to='/login'>Sign In</Link>
</ul>

 

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Navigation;