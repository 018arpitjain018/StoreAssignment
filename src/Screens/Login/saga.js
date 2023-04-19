import { takeLatest, put } from 'redux-saga/effects';
import { HTTP_METHODS } from '../../Constants/api-constants';

import {GENERATE_TOKEN} from '../../Constants/api-end-points';
import request from '../../utils/request';

/**
 * Worker saga will be fired on USER_FETCH_REQUESTED actions
 * It takes an action object as its input, which contains the user's email address and optional onSuccess and onError callback functions.
 * 
 * @params
 * * action: An object that contains the following properties:
 *    payload: An object that contains the following properties:
 *      * email: A string that represents the email address of the user to be fetched.
 *      * onSuccess (optional): A callback function to be executed upon successful completion of the API request.
 *      * onError (optional): A callback function to be executed if an error occurs during the API request.
 * 
 * @returns
 * This function generates side effects, specifically an API request to fetch the user data, and dispatches Redux actions to update the state of the application accordingly.
 */
function* fetchUser(action) {
   try {
    const _req = {
        api: GENERATE_TOKEN(), // Generate api end point
        method: HTTP_METHODS.POST,
        token: null, // Authorization token
        params: {email: action.payload.email} // Required body for HTTP request 
    }
    const user = yield request(_req);

    if (user.token) {
        yield put({ type: 'Auth/setToken', payload: {token: user.token, email: action.payload.email} })
        action.payload.onSuccess && action.payload.onSuccess()
    }
   } catch (e) {
      action.payload.onError && action.payload.onError(e)
   }
}

/**
 * The fetchUserSaga generator function is responsible for listening to Redux actions dispatched with the Auth/login type and 
 * executing the fetchUser generator function to fetch user data from an API.
 * 
 * @params
 * This method does not take any parameters.
 * 
 * @returns
 * This function generates a Redux saga that listens to Redux actions with the Auth/login type and executes the fetchUser generator function.
 */
export function* fetchUserSaga() {
  yield takeLatest("Auth/login", fetchUser);
}
