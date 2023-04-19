/**
 * The loginAction() function returns the state object that is passed as an argument.
 * 
 * @params
 * This function takes a single parameter:
 * * state: An object that represents the current state of the application.
 * 
 * @returns
 * This function returns the state object that is passed as an argument.
 */
export const loginAction = (state) => {
    return state;
}

/**
 * The setTokenAction() function updates the state object with the token and email values passed in the action object's payload.
 * 
 * @params
 * This function takes two parameters:
 * * state: An object that represents the current state of the application.
 * * action: An object that contains the payload property with token and email properties.
 * 
 * @returns
 * This function returns the updated state object.
 */
export const setTokenAction = (state, action) => {
    state.token = action.payload.token
    state.email = action.payload.email
    return state;
}

/**
 * The logoutAction() function updates the state object by setting token and email properties to null.
 * 
 * @params
 * This function takes a single parameter:
 * * state: An object that represents the current state of the application
 * 
 * @returns
 * This function returns the updated state object.
 */
export const logoutAction = (state) => {
    state.token = null
    state.email = null
    return state;
}
