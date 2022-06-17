import { View, Text, Button } from 'react-native'
import React from 'react'
import {styles} from './styles'

const ProductsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <Button title='Go to Product Detail' onPress={() => navigation.navigate('ProductsDetail')}/>
    </View>
  )
}

export default ProductsScreen