import React, {useState} from 'react';
import {Constants} from '../constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({
  text,
  filled = false,
  color = Constants.color.colorDefault,
  iconName,
  onPress,
  borderRadius = 50,
  disableButton,
}) => {
  return (
    <>
      {filled ? (
        <TouchableOpacity
          style={styles.filledButton(color, borderRadius)}
          disabled={disableButton}
          onPress={onPress}>
          <View style={styles.filledView}>
            {iconName && <Icon name={iconName} size={20} color="white" />}
            <Text style={styles.filledText}>{text}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.touchableOpacity(color)}
          onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.text(color)}>{text}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: color => ({
    borderColor: color,
    borderWidth: Constants.color.borderWidth,
    color: color,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  filledButton: (color, borderRadius) => ({
    backgroundColor: color,
    padding: 5,
    borderRadius: borderRadius,
    borderWidth: Constants.color.borderWidth,
    borderColor: color,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  filledText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  filledView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: color => ({
    color: color,
    textAlign: 'center',
    fontWeight: 'bold',
  }),
  iconStyle: {
    color: 'white',
  },
});

export default ButtonComponent;
