import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  useLazyGetAllProductsQuery,
  useLazyGetSingleProductQuery,
} from '../../services/productApi';

import CardComponent from '../../components/CardComponent';
const Homescreen = () => {
  // const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  // const [getSingleProduct, singleResponse] = useLazyGetSingleProductQuery();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await getAllProducts();
  //     } catch (error) {
  //       console.log(error, 'error');
  //     }
  //   })();
  // }, [getAllProducts]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await getSingleProduct('PR-176081763608');
  //     } catch (error) {
  //       console.log(error, 'error');
  //     }
  //   })();
  // }, [getSingleProduct]);

  // allResponse.data && console.log(allResponse.data, 'All products');
  // singleResponse.data && console.log(singleResponse.data, 'single product');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          {/* <Text>This is home screen</Text> */}
          <CardComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    // backgroundColor: 'grey',
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Homescreen;
