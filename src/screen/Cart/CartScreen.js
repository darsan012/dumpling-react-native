import React from 'react'
import { ScrollView,Text } from 'react-native'
import AddToCartCard from '../../components/AddToCartCard'
import Header from '../../components/Headers'


const CartScreen = () => {
  return (
      <ScrollView>
      <Header text="Add to Cart Page" fontSize={30} />
      <AddToCartCard  />
    </ScrollView>
  )
}

export default CartScreen