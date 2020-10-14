import { RECEIVE_CURRENT_USER } from '../actions/session_action';


export const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user
        return nextState;

        default:
            return oldState;
    }

}

export default usersReducer;