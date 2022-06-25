import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { CategoryItem } from '../../components'
import { categories } from '../../data/categories'

const CategoriesScreen = ({navigation}) => {

  const onSelected = (item) => {
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