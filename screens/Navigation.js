
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import RestaurantDetailsHome from './RestaurantDetailsHome'
import { Provider } from 'react-redux'
import configureStore from './Redux/Store'
import OrderComplete from './OrderComplete'

const store =configureStore()
const RootNavigation = () => {
    const Stack = createStackNavigator()

    const screenOptions={
        headerShown:false
    }
  return (

      <Provider store={store}>

                
   <NavigationContainer>
   <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
     <Stack.Screen   
      name="Home"
      component={Home}
     />

     <Stack.Screen 
     name="RestaurantDetails"
     component={RestaurantDetailsHome}
     />

     <Stack.Screen
     name="orderComplete"
     component={OrderComplete}
     />
   </Stack.Navigator>
   </NavigationContainer>

   </Provider>
  )

     
}

export default RootNavigation