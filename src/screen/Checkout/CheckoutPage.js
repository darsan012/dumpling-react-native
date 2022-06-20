import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../../components/ButtonComponent';
import Header from '../../components/Headers';
import {Constants} from '../../constants/Constants';
import {usePostFormMutation} from '../../services/cartApi';
import {clearCart} from '../../store/slices/cartSlice';

const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [numberErr, setNumberErr] = useState({});
  const [addressErr, setAddressErr] = useState({});
  const cartItems = useSelector(state => state.cart.cart);
  const [postForm] = usePostFormMutation();

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
        username: name,
        phone: number,
        address: address,
        email: email,
      };
      const setContactInfo = async () => {
        try {
          const response = await postForm({
            orders: [
              ...cartItems.map(obj => ({
                productId: obj.productId,
                quantity: obj.quantity,
              })),
            ],
            ...value,
          });
          response.data &&
            ToastAndroid.show(
              'Form Submitted successfully !',
              ToastAndroid.SHORT,
            );
          response.error &&
            ToastAndroid.show('Error submitting form !', ToastAndroid.SHORT);
          dispatch(clearCart());
          setName('');
          setEmail('');
          setAddress('');
          setNumber('');
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

  return (
    <View style={styles.checkoutContainer}>
      <Header text="Checkout" fontSize={25} />
      <View>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          Details
        </Text>
        <View>
          <View style={styles.inputContainer}>
            <Icon
              name="id-card"
              size={18}
              color={Constants.color.colorWarning}
            />
            <TextInput
              placeholder="Name"
              placeholderTextColor={'#003532'}
              style={styles.input}
              onChangeText={e => setName(e)}
              value={name}
              onBlur={nameValidation}
            />
          </View>
          {Object.keys(nameErr).map((key, index) => (
            <Text
              key={index}
              style={{
                color: 'red',
                fontSize: 10,
              }}>
              {nameErr[key]}
            </Text>
          ))}
          <View style={styles.inputContainer}>
            <Icon
              name="phone-alt"
              size={18}
              color={Constants.color.colorWarning}
            />
            <TextInput
              placeholder="Phone"
              placeholderTextColor={'#003532'}
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
            <Icon
              name="envelope"
              size={18}
              color={Constants.color.colorWarning}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#003532'}
              style={styles.input}
              onChangeText={e => setEmail(e)}
              value={email}
              onBlur={emailValidation}
            />
          </View>
          {Object.keys(emailErr).map((key, index) => (
            <Text
              key={index}
              style={{
                color: 'red',
                fontSize: 10,
              }}>
              {emailErr[key]}
            </Text>
          ))}
          <View style={styles.inputContainer}>
            <Icon name="home" size={18} color={Constants.color.colorWarning} />
            <TextInput
              placeholder="Address"
              placeholderTextColor={'#003532'}
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
      <View style={styles.buttonComponent}>
        <ButtonComponent
          text="Submit"
          filled={true}
          borderRadius={5}
          color={Constants.color.colorWarning}
          onPress={onSubmit}
        />
      </View>
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
    color: '#003532',
  },
  buttonComponent: {
    marginTop: 26,
  },
});
export default CheckoutScreen;
