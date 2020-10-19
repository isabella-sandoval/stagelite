import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='page-does-not-exist'>This page does not exist. Return to { this.props.homepage }</div>
        )
    }
}


const mSTP = (state) => {
    return {
        homepage: <Link className="to-homepage" to="/"> homepage</Link>
    
    };
};

const mDTP = dispatch => {
    return {
       
    };
};


export default connect(mSTP, mDTP)(Error);