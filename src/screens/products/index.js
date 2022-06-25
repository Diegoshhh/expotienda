import { View, FlatList } from 'react-native'
import React from 'react'
import {styles} from './styles'
import ProductItem from '../../components/product-item'
import { products } from '../../data/productos'


const ProductsScreen = ({navigation, route}) => {

  const {categoryId} = route.params;

  const filterProducts = products.filter(product => product.categoryId === categoryId)

  const onSelected = (item) => {
    navigation.navigate('ProductsDetailsScreen', {productId: item.id, name: item.name})
  }

  const renderItem = ({item}) => (
    <ProductItem item={item} onSelected={onSelected}/>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default ProductsScreen