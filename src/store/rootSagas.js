import { all } from 'redux-saga/effects';

import {fetchUserSaga} from '../Screens/Login/saga';
import {fetchPostSaga} from '../Screens/Home/saga';

/**
 * The watchAll() function is typically used as an entry point for running sagas in a Redux application. 
 * When the Redux store is created, the sagaMiddleware.run(watchAll) method is called to start the saga middleware and run the watchAll() generator function. 
 * This allows all the sagas to be started and run concurrently.
 */
function* watchAll() {
  yield all([
    fetchUserSaga(),
    fetchPostSaga()
  ]);
}

export default watchAll;
