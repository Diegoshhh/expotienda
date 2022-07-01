import { View, Text} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {useSelector} from 'react-redux'


const ProductDetailsScreen = ({route}) => {

  const product = useSelector(state => state.product.selected)
  const {productId} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>{product.id}</Text>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.text}>{product.weight}</Text>
        <Text style={styles.text}>${product.price.toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default ProductDetailsScreen