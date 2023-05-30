import React, { Component, PropTypes } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Home from '../screens/home';
import Schedule from '../screens/schedule';
import Gym from '../screens/gym';
import Contact from '../screens/contact';
import Our_classes from '../screens/our_classes';


const Stack = createStackNavigator();



function Navigator() {
  // This is the navigator component which is used to navigate between the screens in the app
  // The navigator component is used in the App.js file which is the main component of the app and is used to wrap the entire app


  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
      <Stack.Screen name="Gym" component={Gym} options={{ headerShown: false }} />
      <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
      <Stack.Screen name="Our_classes" component={Our_classes} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Navigator;
