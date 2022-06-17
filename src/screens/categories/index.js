import { View, Text, Button } from 'react-native'
import React from 'react'
import {styles} from './styles'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CategoriesScreen</Text>
      <Button title='Go to Products Screen' onPress={() => navigation.navigate('Products')}/>
    </View>
  )
}

export default CategoriesScreen