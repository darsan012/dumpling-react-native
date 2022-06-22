import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import ButtonComponent from './ButtonComponent';
import {useDispatch} from 'react-redux';
import {
  adjustQuantity,
  decrementQuantity,
  incrementQuantity,
} from '../store/slices/cartSlice';

const UpDownButton = ({id, cart}) => {
  const dispatch = useDispatch();
  const handleMinusPress = id => {
    dispatch(decrementQuantity({productId: id}));
  };
  const handlePlusPress = id => {
    dispatch(incrementQuantity({productId: id}));
  };
  return (
    <View style={styles.buttonWrapper}>
      <ButtonComponent
        text="-"
        color="black"
        filled={true}
        borderRadius={1}
        onPress={() => handleMinusPress(id)}
      />
      <TextInput
        style={styles.input}
        placeholder="0"
        keyboardType="numeric"
        defaultValue={
          cart.length !== 0
            ? cart.filter(item => item.productId === id)[0].quantity.toString()
            : '0'
        }
        onEndEditing={e => {
          dispatch(adjustQuantity({productId: id, quantity: e.nativeEvent.text}));
        }}
        placeholderTextColor="black"
      />
      <ButtonComponent
        text="+"
        color="black"
        filled={true}
        borderRadius={1}
        onPress={() => handlePlusPress(id)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    color: 'black',
    borderRadius: 1,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default UpDownButton;
