import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import momo from '../assets/momo0.jpeg';
import {Constants} from '../constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = ({item, handlePress, handleCartPress, itemImage}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={{width: '73%'}}>
        <Text style={styles.cardHeader} numberOfLines={1}>
          {item.name}
        </Text>
        {/* <Text style={styles.cardDescription} numberOfLines={1}>
         {item.description} 
        </Text> */}
        <View style={styles.cardFooter}>
          <View
            style={{
              width: '35%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.pricing}> Rs. {item.price}</Text>

            <Text style={styles.pricing}>Stock: {item.stockQuantity}</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 30,
            }}
            onPress={handleCartPress}>
            <Icon name="shopping-cart" size={20} color={'#3d3d3d'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width:'25%',overflow:'hidden',borderRadius:5}}>
        <Image
          source={itemImage}
          defaultSource={momo}
          style={styles.imageStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    padding:5,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(251,251,251)',
    borderRadius: 8,
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
    paddingTop: 3,
    marginBottom: 14,
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    width: 200,
    color: 'white',
  },
  pricing: {
    fontWeight: '400',
    fontSize: 15,
    paddingRight: 20,
    color: Constants.color.colorSuccess,
  },
  imageStyle: {
    height: '100%',
    width: 100, 
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%'
  },
});
