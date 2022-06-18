import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import AddToCartCard from '../../components/AddToCartCard';
import Header from '../../components/Headers';
import chilly from '../../assets/chillyMomo.jpg';
import {Constants} from '../../constants/Constants';
import ButtonComponent from '../../components/ButtonComponent';

const CartScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate("Checkout")
  }
  return (
    <ScrollView>
      <Header text="Add to Cart Page" fontSize={30} />
      <AddToCartCard
        momoImage={chilly}
        momoName="Kothey Chicken MOMO"
        momoPrice={200}
      />
      <AddToCartCard
        momoImage={chilly}
        momoName="Kothey Chicken MOMO"
        momoPrice={200}
      />
      <AddToCartCard
        momoImage={chilly}
        momoName="Kothey Chicken MOMO"
        momoPrice={200}
      />
      <View style={styles.billContainer}>
        <Header text="Bill" fontSize={25} />
        <View>
          <View style={styles.item}>
            <Text style={styles.momoName}>Kothey Veg Momo</Text>
            <Text style={styles.momoPrice}>Rs. 200</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.momoName}>Kothey Veg Momo</Text>
            <Text style={styles.momoPrice}>Rs. 200</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.momoName}>Kothey Veg Momo</Text>
            <Text style={styles.momoPrice}>Rs. 200</Text>
          </View>
          <View style={styles.totalContainer}>
            <View style={styles.totalPriceWrapper}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.totalPrice}>Rs. 800</Text>
            </View>
            <View style={styles.checkoutButton}>
              <ButtonComponent
                text="Checkout"
                color={Constants.color.colorSuccess}
                filled={true}
                borderRadius={1}
                onPress={handlePress}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    shadowColor: 'black',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    width: '92%',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  momoName: {
    color: Constants.color.primaryColor,
    fontSize: 18,
  },
  momoPrice: {
    color: Constants.color.primaryColor,
    fontSize: 18,
  },
  totalContainer: {
    backgroundColor: '#FFE4C4',
  },
  totalPriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  total: {
    color: Constants.color.primaryColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
  totalPrice: {
    color: Constants.color.primaryColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
  checkoutButton: {
    width: 110,
    marginLeft: '37%',
    marginBottom:20
  },
});

export default CartScreen;
