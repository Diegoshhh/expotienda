import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import ProductItem from '../../components/product-item'
import {useSelector, useDispatch} from 'react-redux'
import {styles} from './styles'
import { filteredProducts } from '../../store/actions/products.actions'


const ProductsScreen = ({navigation}) => {  
  const dispatch = useDispatch()
  const filterProducts = useSelector(state => state.products.filteredProducts)  
  const category = useSelector(state => state.category.selected)

  useEffect(() => {
    dispatch(filteredProducts(category.id))
  }, [])
  

  const onSelected = (item) => {
    dispatch(selectedProduct(item.id))
    navigation.navigate('ProductsDetailsScreen', {
      productId: item.id, 
    })
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