import React from 'react';

import Login from '../Screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * The Navigator component creates a stack of screens that can be navigated back and forth using a stack-based approach.
 */
const AuthStack = createNativeStackNavigator()

/**
 * The AuthRoute component uses AuthStack.Navigator to create a stack navigator 
 * and sets screenOptions as headerShown: false to hide the header bar for all screens.
 * 
 * @params
 * * name: A string representing the name of the screen, in this case "Login".
 * * component: The component to render when this screen is active, in this case Login.
 * 
 * @returns
 * It returns an object containing the Navigator and Screen components, which can be used to define the stack of screens in the application.
 */
function AuthRoute() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  )
}

export default AuthRoute;
