import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_action';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user
            return nextState
            
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }
};

export default sessionReducer;