import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartNavigator from './cart'
import OrdersNavigator from './orders'
import MainNavigator from './main'
import { colors } from '../constans/theme.js/colors'
import { Text } from 'react-native'
import { styles } from './styles.js'



const BottomTabs = createBottomTabNavigator()

const LabelBottomTab = (focused, label) => (
  <Text
    style={{
      color: focused ? colors.primary : colors.secondary,
      fontFamily: focused ? 'Lato-Black' : 'Lato-Regular'
    }}
  >{label}</Text>
)

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
        initialRouteName='ShopTab'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarStyle:styles.tabBar,
          // tabBarActiveTintColor: colors.primary,
          // tabBarInactiveTintColor:colors.secondary
        }}
    >
      <BottomTabs.Screen
        name='ShopTab'
        component={MainNavigator}
        options={{
            tabBarLabel:({focused}) => LabelBottomTab(focused, 'Shop'),
            tabBarIcon:({focused}) => (
                <Ionicons 
                    name={focused ? 'home' : 'home-outline'}
                    size={26}
                    color={focused ? colors.primary : colors.secondary}
                />
            )
        }}
      />
      <BottomTabs.Screen
        name='CartTab'
        component={CartNavigator}
        options={{
          tabBarLabel:({focused}) => LabelBottomTab(focused, 'Cart'),
            tabBarIcon:({focused}) => (
                <Ionicons 
                    name={focused ? 'cart' : 'cart-outline'}
                    size={26}
                    color={focused ? colors.primary : colors.secondary}
                />
            )
        }}
      />
      <BottomTabs.Screen
        name='OrdersTab'
        component={OrdersNavigator}
        options={{
          tabBarLabel:({focused}) => LabelBottomTab(focused, 'Orders'),
            tabBarIcon:({focused}) => (
                <Ionicons 
                    name={focused ? 'file-tray-full' : 'file-tray-outline'}
                    size={26}
                    color={focused ? colors.primary : colors.secondary}
                />
            )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator