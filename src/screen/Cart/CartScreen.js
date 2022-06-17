import React from 'react'
import { ScrollView,Text } from 'react-native'
import AddToCartCard from '../../components/AddToCartCard'
import Header from '../../components/Headers'
import chilly from '../../assets/chillyMomo.jpg';


const CartScreen = () => {
  return (
      <ScrollView>
      <Header text="Add to Cart Page" fontSize={30} />
      <AddToCartCard momoImage={chilly} momoName="Kothey Chicken MOMO" momoPrice={200} />
      <AddToCartCard momoImage={chilly} momoName="Kothey Chicken MOMO" momoPrice={200} />

      <AddToCartCard momoImage={chilly} momoName="Kothey Chicken MOMO" momoPrice={200} />

      
    </ScrollView>
  )
}

export default CartScreen