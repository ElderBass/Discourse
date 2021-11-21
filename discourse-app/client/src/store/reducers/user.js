import * as UserActions from '../actions/user';

const INITIAL_STATE = {
    username: '',
    email: '',
    authToken: '',
    isLoggedIn: false,
};

function user(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case UserActions.ADD_USER:
            return {
                ...state,
                username: payload.username,
                email: payload.email,
            };
        case UserActions.LOG_IN_USER:
            return {
                username: payload.username,
                email: payload.email,
                authToken: payload.token,
                isLoggedIn: true,
            };
        default:
            return state;
    }
}

export default user;