import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './tabs'
import { SafeAreaView } from "react-native-safe-area-context";


const AppNavigator = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default AppNavigator