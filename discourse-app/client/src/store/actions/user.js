const ADD_USER = 'ADD_USER';
const addUser = (user) => ({
    type: ADD_USER,
    payload: user
});

const LOG_IN_USER = 'LOG_IN_USER';
const logInUser = (user) => ({
    type: LOG_IN_USER,
    payload: user
});

export {
    ADD_USER,
    addUser,
    LOG_IN_USER,
    logInUser
};