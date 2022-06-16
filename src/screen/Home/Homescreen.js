import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {useLazyGetAllProductsQuery} from '../services/productApi';

const HomeScreen = () => {
  // const [getAllProducts, response] = useLazyGetAllProductsQuery();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>This is home screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
