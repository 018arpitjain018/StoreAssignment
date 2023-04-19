/**
 * This is a Redux action that takes in a state object and returns the same object. 
 * This action can be dispatched to trigger a state update for getting posts.
 * 
 * @params
 * * state: The current state object.
 * @returns
 * * state: The same state object passed in as a parameter.
 */
export const GetPostAction = (state) => {
    return state;
}

/**
 * Updates the state with the fetched posts data.
 * 
 * @params 
 *  * state: The previous state of the Redux store.
 *  * action: The Redux action dispatched, containing a payload with the fetched posts data.
 *      action.payload: An array of post objects fetched from the API.
 * 
 * @returns
 * * state: The new state with the updated post data.
 */
export const setPostAction = (state, action) => {
    state.post = action.payload
    return state;
}

/**
 * This is a Redux action creator function that returns the updated state object after resetting the post property to null.
 * 
 * @params
 * * state: The current state object.
 * 
 * @returns
 * * state: The updated state object after resetting the post property to null.
 */
export const resetPostAction = (state) => {
    state.post = null;
    return state;
}
