/**
 * This function can be imported into any module that needs to access the token value from the store's state.
 * 
 * @params
 * state parameter from the AuthReducer object in the state object.
 * 
 * @returns
 * token property from the AuthReducer object
 */
export const getToken = (state) => state.AuthReducer.token;
