import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

function MenuComponent({item}) {
  const [initialState, setFinalState] = useState(false);
  const pressHandler = () => setFinalState(previousState => !previousState);
  return (
    <TouchableOpacity
      style={initialState ? styles.initialContainer : styles.finalContainer}
      onPress={pressHandler}>
      <Text style={initialState ? styles.initialText : styles.finalText}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  initialContainer: {
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
  finalContainer: {
    height: 35,
    width: 80,
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
  initialText: {fontSize: 13, color: 'black', fontWeight: '400'},
  finalText: {fontSize: 13, color: 'white', fontWeight: '400'},
});
export default MenuComponent;
