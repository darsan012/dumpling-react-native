import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import momo from '../assets/momo0.jpeg';

import Icon from 'react-native-vector-icons/FontAwesome5';

const CardComponent = ({item}) => {
  const cardPressHandler = () => {
    Alert.alert('hello from card');
  };
  const cartPressHandler = () => {
    Alert.alert('hello from cart');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={cardPressHandler}>
      <View>
        <Text style={styles.cardHeader}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.pricing}>$ {item.price}</Text>
          <TouchableOpacity onPress={cartPressHandler}>
            <Icon
              name="cart-plus"
              size={20}
              color="#3d3d3d"
              style={{padding: 8}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image source={momo} style={styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;

CardComponent.defaultProps = {
  description: 'Fresh and healthy momos',
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 360,
    margin: 5,
    marginVertical: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
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
