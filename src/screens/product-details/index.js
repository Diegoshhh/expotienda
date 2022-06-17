import { View, Text, Button } from 'react-native'
import React from 'react'
import {styles} from './styles'

const ProductDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProductDetailsScreen</Text>
      <Button title='Go to Categories' onPress={() => navigation.navigate('Categories')}/>
    </View>
  )
}

export default ProductDetailsScreen