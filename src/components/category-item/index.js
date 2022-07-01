import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import {styles} from './styles'

const CategoryItem = ({item, onSelected}) => {

  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{borderRadius:10, resizeMode:'cover'}} source={item.imagen} style={{width: '100%', height: '100%'}}>

        <TouchableOpacity
          onPress={() => onSelected(item)}
          style={{...styles.containerTouchable}}
        >
          <View>
              <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default CategoryItem