import { takeLatest, put, select } from 'redux-saga/effects';
import { HTTP_METHODS } from '../../Constants/api-constants';

import {GET_CONTENT} from '../../Constants/api-end-points';
import request from '../../utils/request';

import {getToken} from '../../utils/selectors';

/**
 * The fetchPost method is a generator function that takes an action object as its input. 
 * This function is intended to be used as a generator function in a redux-saga middleware.
 * Worker saga will be fired on USER_FETCH_REQUESTED actions
 * 
 * @params
 * * action: An object that contains the following properties:
 *    payload: An object that contains the following properties:
 *      * onSuccess (optional): A callback function to be executed upon successful completion of the API request.
 *      * onError (optional): A callback function to be executed if an error occurs during the API request.
 * 
 * @returns
 * This function generates side effects, specifically an API request to fetch the posts data, and dispatches Redux actions to update the state of the application accordingly.
 */
function* fetchPost(action) {
    const token = yield select(getToken)

    try {
     const _req = {
         api: GET_CONTENT(),
         method: HTTP_METHODS.GET,
         token: token,
     }
     const post = yield request(_req);
 
     if (post) {
         yield put({ type: 'Post/setPost', payload: post.content })
         action.payload?.onSuccess && action.payload.onSuccess(post.content)
     }
    } catch (e) {
       action.payload?.onError && action.payload.onError(e)
    }
 }
 
 /**
  * A generator function used as a Redux Saga to listen to dispatched actions with type "Post/GetPost" 
  * and runs the fetchPost generator function in response.
  * 
  * @params
  * This method does not take any parameters.
  * @returns
  * This method does not return any value.
  */
 export function* fetchPostSaga() {
   yield takeLatest("Post/GetPost", fetchPost);
 }
