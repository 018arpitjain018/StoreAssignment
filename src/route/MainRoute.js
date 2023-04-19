import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Details from '../Screens/Details';

/**
 * The Navigator component creates a stack of screens that can be navigated back and forth using a stack-based approach.
 */
const MainStack = createNativeStackNavigator()

/**
 * The MainRoute component uses MainStack.Navigator to create a stack navigator 
 * and sets screenOptions as headerShown: false to hide the header bar for all screens.
 * 
 * @params
 * * name: A string representing the name of the screen, in this case "Home" or "Details".
 * * component: The component to render when this screen is active, in this case Home or Details.
 * 
 * @returns
 * It returns an object containing the Navigator and Screen components, which can be used to define the stack of screens in the application.
 */
function MainRoute() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  )
}

export default MainRoute;
