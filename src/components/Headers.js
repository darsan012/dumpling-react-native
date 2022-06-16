import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Constants} from '../constants/Constants';

const Header = ({
  text,
  fontFamily,
  fontSize = Constants.largeFont,
  fontColor = 'black',
}) => {
  return (
    <Text style={styles.text(fontFamily, fontSize, fontColor)}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  text: (fontFamily, fontSize, fontColor) => ({
    fontSize,
    textAlign: 'center',
    color: fontColor,
    marginBottom: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    fontFamily,
    marginHorizontal: 10,
  }),
});

export default Header;
