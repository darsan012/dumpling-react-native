import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import { Constants } from '../constants/Constants';

const FeaturedCard = ({momoImage, momoName, momoPrice, momoDescription}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={momoImage} style={styles.cardImage} />
      <View style={styles.momoDetails}>
        <View style={styles.textContainer}>
          <Text style={styles.momoName}>{momoName}</Text>
          <Text style={styles.momoPrice}>Rs. {momoPrice}</Text>
        </View>
        <Text style={styles.momoDescription}>{momoDescription} </Text>
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
    // width: '100%',
    // alignItems:'center'
  },

  momoName: {
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
  },
});

export default FeaturedCard;
