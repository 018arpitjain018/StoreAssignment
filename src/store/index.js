import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import AuthReducer from '../Screens/Login/reducer';
import PostReducer from '../Screens/Home/reducer';

import watchAll from './rootSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger]

/**
 * The store is configured using the configureStore function from the Redux Toolkit library. 
 * This function accepts an object with the following properties:
 * 
 * @params
 * * reducer (required): an object containing the reducers for the application. Each key in the object corresponds to a slice of the state, and its value is the reducer function for that slice.
 * middleware (optional): an array of middleware functions to be applied to the store.
 * 
 * @returns
 * store object that holds all reducers and actions required for the project
 */
export const store = configureStore({
    reducer: {
        AuthReducer: AuthReducer,
        PostReducer: PostReducer,
    },
    middleware: middleware
});

/**
 * It is used to run the root saga in the application, which is responsible for initiating and coordinating all other sagas in the application. 
 */
sagaMiddleware.run(watchAll)
