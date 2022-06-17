import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

function MenuComponent({item, onPress, initialState}) {
  const state = initialState.initialState;
  return (
    <TouchableOpacity
      style={state ? styles.initialContainer : styles.finalContainer}
      onPress={onPress}>
      <Text style={state ? styles.initialText : styles.finalText}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  finalContainer: {
    height: 35,
    width: 100,
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
  initialContainer: {
    height: 35,
    width: 100,
    margin: 5,
    // backgroundColor: '#7a7a7a',
    backgroundColor: '#3d3d3d',
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
  finalText: {fontSize: 13, color: 'black', fontWeight: '400'},
  initialText: {fontSize: 13, color: 'white', fontWeight: '400'},
});
export default MenuComponent;
