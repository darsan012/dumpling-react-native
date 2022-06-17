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
import chilly from '../assets/chillyMomo.jpg';

const AddToCartCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Image source={chilly} style={styles.cardImage} />
        <View style={styles.momoDetails}>
          <View style={styles.textContainer}>
            <Text style={styles.momoName} numberOfLines={1}>
              Chilly
            </Text>
            <Text style={styles.momoPrice}>Rs.200</Text>
          </View>
          <Text style={styles.momoDescription} numberOfLines={1}>
            jhtfdr kjiuytr5 liuytre kuiytr
          </Text>
        </View>
      </View>
      {/* {showModal && createAlert()} */}
    </TouchableOpacity>
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
  },
  cardImage: {
    height: 80,
    width: 80,
    marginHorizontal: 5,
  },
  momoDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  momoName: {
    maxWidth: 200,
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 20,
    color: Constants.color.primaryColor,
  },
  momoPrice: {
    fontSize: 18,
    color: Constants.color.colorSuccess,
  },
  momoDescription: {
    color: Constants.color.primaryColor,
    marginHorizontal: 20,
    marginTop: 20,
    maxWidth: 230,
  },
});

export default AddToCartCard;
