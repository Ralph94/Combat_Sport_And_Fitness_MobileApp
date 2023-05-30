import React, { components } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Navigator from 'C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/components/navigation/navigator.js'
import { GlobalContext, GlobalProvider } from "C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/components/globalContext/globalContext.js";






function App(props) { 
  return (
    // GlobalProvider is a component that wraps the entire app and provides the global state to all components whcih allows us to use the global state in any component for example the global state is used in the navigator component to check if the user is logged in or not
    // The NavigationContainer is a component that is used to wrap the navigator component which is used to navigate between the screens in the app
    // The View component is used to wrap the NavigationContainer component and the GlobalProvider component
    <GlobalProvider> 
      <View style={{flex:1}}>
        <NavigationContainer>
          <Navigator /> 
        </NavigationContainer>
      </View>
    </GlobalProvider>
  );
}







export default App;