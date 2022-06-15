import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import momo from '../assets/momo0.jpeg';

import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = () => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.cardHeader}>Steam Veg Momo</Text>
          <Text style={styles.cardDescription}>
            Momo made with proper sanitation
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.pricing}>$10.00</Text>
            <TouchableOpacity>
              <Icon name="cart-plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image source={momo} style={styles.imageStyle} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CardComponent;

// const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: 380,
    backgroundColor: 'rgb(251,251,251)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 8,
    overflow: 'hidden',
  },
  cardHeader: {
    fontSize: 18,
    color: 'rgb(0,0,0)',
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
  },
  pricing: {
    color: 'rgb(0,0,0)',
    fontWeight: '400',
    fontSize: 15,
    paddingRight: 170,
  },
  imageStyle: {
    height: 80,
    width: 100,
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
