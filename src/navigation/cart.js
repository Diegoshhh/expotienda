import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { colors } from '../constans/theme.js/colors'
import { CartScreen } from '../screens'


const Stack = createNativeStackNavigator()

const CartNavigator = () => {

  const isAndroid = Platform.OS === 'android';

  return (
    <Stack.Navigator 
      initialRouteName='Cart'
      screenOptions={{
        headerStyle:{
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.white : colors.black,
        headerTitleStyle: {
          fontFamily:'Lato-Black',
        }
      }}
    >
      <Stack.Screen 
        name='CartScreen' 
        component={CartScreen}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator