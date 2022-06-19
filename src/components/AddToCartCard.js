import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Constants} from '../constants/Constants';
import {removeFromCart} from '../store/slices/cartSlice';
import UpDownButton from './UpDownButton';
import IconComponent from './IconComponent';
import {faMultiply} from '@fortawesome/free-solid-svg-icons';

const AddToCartCard = ({momoImage, momoName, momoPrice, id}) => {
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removePress = id => {
    dispatch(removeFromCart({productId: id}));
  };
  return (
    <View style={styles.cardContainer}>
      <Image source={momoImage} style={styles.cardImage} />
      <View style={styles.momoDetails}>
        <Text style={styles.momoName} numberOfLines={1}>
          {momoName}
        </Text>
        <Text style={styles.momoPrice}>Rs. {momoPrice}</Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => removePress(id)}
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginTop: -21,
            marginRight: -20,
            padding: 6,
            borderRadius: 20,
            backgroundColor: '#3d3d3d',
          }}>
          <IconComponent iconName={faMultiply} size={15} color="white" />
        </TouchableOpacity>
        <View style={styles.upDownWrapper}>
          {cart.filter(item => item.productId === id).length !== 0 && (
            <UpDownButton id={id} cart={cart} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '92%',
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: 'black',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
  },
  cardImage: {
    height: 70,
    width: 80,
    borderRadius: 5,
    marginLeft: -10,
  },
  momoDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  momoName: {
    maxWidth: 90,
    fontSize: 18,
    color: 'rgb(0,0,0)',
    fontWeight: '500',
  },
  momoPrice: {
    fontWeight: '400',
    fontSize: 15,
    color: Constants.color.colorSuccess,
  },
  button: {
    marginLeft: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  upDownWrapper: {
    height: 46,
    marginVertical: 10,
  },
  buttonWrapper: {
    width: 139,
  },
});

export default AddToCartCard;
