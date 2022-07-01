import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '../../constans/theme.js/colors'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{borderRadius:10, resizeMode:'contain'}} source={item.imagen} style={{width: '100%', height: '100%'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{item.name}</Text>
        </View>

        <View style={styles.containerDetail}>
          <View style={styles.detail}> 
              <Text style={styles.detailQty}>{item.quantity}</Text>
              <Text style={styles.detailPrice}>${item.price}</Text>
          </View>
          
          <TouchableOpacity
              onPress={() => onDelete(item.id)}
          >
              <Ionicons style={{paddingRight:20, paddingTop:10}} name='trash' size={26} color={colors.white}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default CartItem