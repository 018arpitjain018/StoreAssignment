/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {store} from './src/store';
import {Provider} from 'react-redux';

/**
 * This is a function named app which returns a React element. 
 * The React element is wrapped in a Redux Provider component which provides the Redux store to all components in the component tree.
 */
const app = () => {
    return (
        // The store is a Redux store that has been created and configured with the necessary middleware and reducers.
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => app);
