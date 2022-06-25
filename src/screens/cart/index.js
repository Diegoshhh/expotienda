import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { CartItem } from '../../components'
import { styles } from './styles'
import {cart} from '../../data/cart'

const CartScreen = () => {
  const total = 12000

  const onHandleDeleteCart = (id) => {
    console.log(id)
  } 
  const onHandleConfirmCart = () => {
    console.log('Cart Confirm')
  }

  
  const renderItem = ({item}) => <CartItem item={item} onDelete={onHandleDeleteCart}/>

  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.buttonConfirm}
          onPress={() => onHandleConfirmCart()}
        >
          <Text style={styles.textConfirm}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen