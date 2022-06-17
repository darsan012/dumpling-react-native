import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import ButtonComponent from './ButtonComponent';

const UpDownButton = () => {
  const [number, numberSet] = useState(null);
  return (
    <View style={styles.buttonWrapper}>
      <ButtonComponent text="-" color="black" filled={true} borderRadius={1} />
      <TextInput
        style={styles.input}
        placeholder="0"
        keyboardType="numeric"
        defaultValue={number}
        onChangeText={value => {
          numberSet(value);
        }}
        placeholderTextColor="black"
      />
      <ButtonComponent text="+" color="black" filled={true} borderRadius={1} />
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
    marginHorizontal:10
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default UpDownButton;
