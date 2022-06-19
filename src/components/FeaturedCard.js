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

const FeaturedCard = ({
  momoImage,
  momoName,
  momoPrice,
  momoDescription,
  handlePress,
}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      <Image source={momoImage} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <View style={styles.textHeader}>
          <View style={{width: 160}}>
            <Text numberOfLines={1} style={styles.momoName}>
              {momoName}
            </Text>
          </View>
          <View style={{marginLeft: 30}}>
            <Text style={styles.momoPrice}>Rs. {momoPrice}</Text>
          </View>
        </View>
        <Text style={styles.momoDescription} numberOfLines={1}>
          {momoDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    shadowColor: 'black',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 90,
    width: 360,
  },
  cardImage: {
    height: 80,
    width: 90,
    borderRadius: 5,
    marginLeft: 5,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'flex-start',
    paddingLeft: 10,
  },
  textHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  momoName: {
    fontSize: 18,
    color: 'rgb(0,0,0)',
    fontWeight: '500',
  },
  momoPrice: {
    fontSize: 15,
    color: Constants.color.colorSuccess,
    fontWeight: '400',
  },
  momoDescription: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
  },
});

export default FeaturedCard;
