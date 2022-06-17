import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CheckoutScreen = () => {
  return (
    <View style={styles.checkoutContainer}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 23,
          color: 'black',
          fontWeight: 'bold',
          paddingBottom: 50,
        }}>
        Checkout
      </Text>
      <View>
        <Text style={{fontSize: 14, color: 'black'}}>Details</Text>
        <View>
          <View style={styles.inputContainer}>
            <Icon name="id-card" size={18} color="rgb(252,200,38)" />
            <TextInput placeholder="Name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="phone-alt" size={18} color="rgb(252,200,38)" />
            <TextInput
              placeholder="Phone"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={18} color="rgb(252,200,38)" />
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="home" size={18} color="rgb(252,200,38)" />
            <TextInput placeholder="Address" style={styles.input} />
          </View>
        </View>
      </View>
      <Pressable style={styles.buttonComponent}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    backgroundColor: 'rgb(233,233,235)',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 100,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 14,
    height: 45,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 3,
  },
  input: {
    paddingLeft: 15,
    width: '80%',
  },
  buttonComponent: {
    marginTop: 40,
    backgroundColor: 'rgb(252,200,38)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
});
export default CheckoutScreen;
