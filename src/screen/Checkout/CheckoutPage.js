import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [numberErr, setNumberErr] = useState({});
  const [addressErr, setAddressErr] = useState({});

  const nameRegex = /^[ a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const onSubmit = e => {
    e.preventDefault();
    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isMessageValid = numberValidation();
    const isAddressValid = addressValidation();
    if (isNameValid && isEmailValid && isMessageValid && isAddressValid) {
      //send this data to database or api
      const value = {
        name: name,
        email: email,
        number: number,
        address: address,
      };
      const setContactInfo = async () => {
        try {
          console.log(value, 'value');
          setName('');
          setEmail('');
          setAddress('');
          setNumber('');
          console.log(value);
        } catch (err) {
          console.error(err, 'error');
        }
      };
      setContactInfo();
    }
  };
  //name validation
  const nameValidation = () => {
    const nameErr = {};
    let isValid = true;
    if (name.trim().length < 1) {
      nameErr.nameEmpty = 'Name is required';
      isValid = false;
    } else if (!name.match(nameRegex)) {
      nameErr.numName = 'Invalid name';
      isValid = false;
    }
    setNameErr(nameErr);
    return isValid;
  };

  //email validation
  const emailValidation = () => {
    const emailErr = {};
    let isValid = true;
    if (email.trim().length < 1) {
      emailErr.emailemp = 'Email is required';
      isValid = false;
    } else if (!email.match(emailRegex)) {
      emailErr.emailName = 'Invalid email';
      isValid = false;
    }
    setEmailErr(emailErr);
    return isValid;
  };

  //number validation
  const numberValidation = () => {
    const numberErr = {};
    let isValid = true;
    if (number.trim().length < 10) {
      numberErr.msgtxt = 'atleast 10 number are required!!';
      isValid = false;
    }
    setNumberErr(numberErr);
    return isValid;
  };
  //address validation
  const addressValidation = () => {
    const addressErr = {};
    let isValid = true;
    if (address.trim().length < 4) {
      addressErr.msgtxt = 'Must be greater than 3 characters';
      isValid = false;
    }
    setAddressErr(addressErr);
    return isValid;
  };

  // console.log(name, email, message);
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
            <TextInput
              placeholder="Name"
              style={styles.input}
              onChangeText={e => setName(e)}
              value={name}
              onBlur={nameValidation}
            />
          </View>
          {Object.keys(nameErr).map(key => (
            <Text
              style={{
                color: 'red',
                fontSize: 10,
              }}>
              {nameErr[key]}
            </Text>
          ))}
          <View style={styles.inputContainer}>
            <Icon name="phone-alt" size={18} color="rgb(252,200,38)" />
            <TextInput
              placeholder="Phone"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={e => setNumber(e)}
              value={number}
              onBlur={numberValidation}
            />
          </View>
          {Object.keys(numberErr).map(key => (
            <Text
              style={{
                color: 'red',
                fontSize: 10,
              }}>
              {numberErr[key]}
            </Text>
          ))}
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={18} color="rgb(252,200,38)" />
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={e => setEmail(e)}
              value={email}
              onBlur={emailValidation}
            />
          </View>
          {Object.keys(emailErr).map(key => (
            <Text
              style={{
                color: 'red',
                fontSize: 10,
              }}>
              {emailErr[key]}
            </Text>
          ))}
          <View style={styles.inputContainer}>
            <Icon name="home" size={18} color="rgb(252,200,38)" />
            <TextInput
              placeholder="Address"
              style={styles.input}
              onChangeText={e => setAddress(e)}
              value={address}
              onBlur={addressValidation}
            />
          </View>
          {Object.keys(addressErr).map(key => (
            <Text
              style={{
                color: 'red',
                fontSize: 10,
              }}>
              {addressErr[key]}
            </Text>
          ))}
        </View>
      </View>
      <Pressable style={styles.buttonComponent} onPress={onSubmit}>
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
