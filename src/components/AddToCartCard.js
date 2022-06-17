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
import {Constants} from '../constants/Constants';
import ButtonComponent from './ButtonComponent';
import UpDownButton from './UpDownButton';

const AddToCartCard = ({momoImage, momoName, momoPrice}) => {
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
          <View style={styles.upDownWrapper}>
            <UpDownButton />
          </View>
          <View style={styles.buttonWrapper}>
            <ButtonComponent
              text="Remove"
              color={Constants.color.colorWarning}
              filled={true}
              borderRadius={1}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '92%',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: 'black',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  cardImage: {
    height: 112,
    width: 105,
    marginHorizontal: 5,
  },
  momoDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  momoName: {
    maxWidth: 60,
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.color.primaryColor,
  },
  momoPrice: {
    fontSize: 15,
    color: Constants.color.colorSuccess,
  },
  button: {
    marginLeft: 30,
  },
  upDownWrapper: {
    height: 46,
    marginVertical: 10,
  },
  buttonWrapper: {
    width: 126,
  },
});

export default AddToCartCard;
