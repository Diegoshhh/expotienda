import { View, FlatList } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { CategoryItem } from '../../components'
import { selectCategory } from '../../store/actions/category.action'
import { useSelector, useDispatch } from 'react-redux'



const CategoriesScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.category.categories)
  const categorySelected = useSelector(state => state.category.selected)
  const categoryProducts = useSelector(state => state.products.filteredProducts)

  console.log(categorySelected)

  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Products',{
      categoryId: item.id,
      title: item.title,
    })
  }

  const renderItem = ({item}) => (
    <CategoryItem item={item} onSelected={onSelected}/>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default CategoriesScreen