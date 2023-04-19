import React, {useEffect} from 'react';
import { DeviceEventEmitter } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {logout} from './src/Screens/Login/reducer';

import AuthRoute from './src/route/AuthRoute';
import MainRoute from './src/route/MainRoute';
import { unAuthorizedUser } from './src/Constants';

function App() {
  const isSignedIn = useSelector(state => state.AuthReducer.token);
  const dispatch = useDispatch();
  let _unAuthorizedUser = null;

  /**
   * Here, the useEffect hook takes two functions as parameters.
   * 
   * The First function didMountOperations is executed after the component is mounted and the UI is rendered.
   * The second function unMountOperations is executed before the component is unmounted and removed from the UI.
   */
  useEffect(() => {
    didMountOperations();
    return unMountOperations; // By returning the unMountOperations function, we ensuring preventions for memory leaks and unwanted side effects.
  })

  /**
   * This method used to add a device event listener such as _unAuthorizedUser when a component is mounted.
   * 
   * @params
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const didMountOperations = () => {

    /**
     * This event unAuthorizedUser once emitted, it triggers a callback function that dispatches a logout action
     * It is generally used when we get unauthorize error such as 401 from API
     */
    _unAuthorizedUser = DeviceEventEmitter.addListener(unAuthorizedUser, () => {
      dispatch(logout());
    })
  }

  /**
   * This method used to remove a device event listener such as _unAuthorizedUser when a component is unmounted.
   * 
   * @params
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const unMountOperations = () => {
    _unAuthorizedUser && _unAuthorizedUser.remove && _unAuthorizedUser.remove()
  }

  return (
    <NavigationContainer>
      {/* Once users signed in, it will render Main components, else it will show login component to user */}
      {isSignedIn ? <MainRoute /> : <AuthRoute />}
    </NavigationContainer>
  )
}

export default App;
