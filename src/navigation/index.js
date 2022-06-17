import React from 'react'
import MainNavigator from './main'
import {NavigationContainer} from '@react-navigation/native'


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}

export default AppNavigator