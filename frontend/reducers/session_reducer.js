import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_action';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // nextState[id] = action.currentUser.id
            // return nextState
            return { id: action.currentUser.id }

        case LOGOUT_CURRENT_USER:
            return _nullUser;

        default:
            return oldState;
    }
};

export default sessionReducer;