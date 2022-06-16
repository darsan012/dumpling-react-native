import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

function MenuComponent({item}) {
  return (
    <TouchableOpacity style={styles.menuContainer}>
      <Text style={styles.menuContainerText}>{item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 35,
    width: 80,
    margin: 5,
    backgroundColor: 'rgb(251,251,251)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 8,
    borderRadius: 5,
  },
  menuContainerText: {fontSize: 13, color: 'black', fontWeight: '400'},
});
export default MenuComponent;
