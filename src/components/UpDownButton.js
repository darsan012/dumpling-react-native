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
    width: '20%',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    color: 'black',
    borderRadius: 1,
    padding: 18,
    height: 58,
    marginTop: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
});
export default UpDownButton;
