import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {CategoriesScreen, ProductDetailsScreen, ProductsScreen} from '../screens/index'
import { Platform } from 'react-native'
import { colors } from '../constans/theme.js/colors'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {

  const isAndroid = Platform.OS === 'android';

  return (
    <Stack.Navigator 
      initialRouteName='Categories'
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
        name='Categories' 
        component={CategoriesScreen}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name='Products' 
        component={ProductsScreen}
        options={({route}) => ({
          title: route.params.title
        })}
      />
      <Stack.Screen 
        name='ProductsDetailsScreen' 
        component={ProductDetailsScreen}
        options={({route}) => ({
          title: route.params.name
        })}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator