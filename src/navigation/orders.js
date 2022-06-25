import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { colors } from '../constans/theme.js/colors'
import { OrdersScreen } from '../screens'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {

  const isAndroid = Platform.OS === 'android';

  return (
    <Stack.Navigator 
      initialRouteName='Orders'
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
        name='OrdersScreen' 
        component={OrdersScreen}
        options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  )
}

export default OrdersNavigator