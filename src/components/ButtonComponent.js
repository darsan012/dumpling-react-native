import React, {useState} from 'react';
import {Constants} from '../constants/Constants';
import IconComponent from './IconComponent';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({
  text,
  filled = false,
  color = Constants.color.colorDefault,
  iconName,
    onPress,
  borderRadius=50
}) => {
  return (
    <>
      {filled ? (
        <TouchableOpacity style={styles.filledButton(color,borderRadius)} onPress={onPress}>
          <View style={styles.filledView}>
            {iconName && (
              <IconComponent iconName={iconName} size={20} color="white" />
            )}
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
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  }),
  filledButton: (color,borderRadius) => ({
    backgroundColor: color,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: borderRadius,
    marginVertical: 20,
    borderWidth: Constants.color.borderWidth,

    borderColor: color,
  }),
  filledText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  filledView: {
    flex: 1,
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
