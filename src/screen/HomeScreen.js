import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyGetAllProductsQuery} from '../services/productApi';
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpg';

import {stylesConstant} from '../constants/Constants';

const HomeScreen = () => {
  const [getAllProducts, response] = useLazyGetAllProductsQuery();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ImageBackground source={hero} style={styles.hero}>
            <View style={styles.logoView}>
              <Image source={logo} style={styles.logo} />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  hero: {
    height: 300,
    width: '100%',
  },
  logoView: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default HomeScreen;
