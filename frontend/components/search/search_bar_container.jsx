import { connect } from 'react-redux';
import React from 'react';
import { updateSearch } from '../../actions/filter_actions';

import SearchBar from './search_bar';


const mSTP = state => {
  
};

const mDTP = dispatch => ({
    updateSearch: search => dispatch(updateSearch(search))
});

export default connect(mSTP, mDTP)(SearchBar);