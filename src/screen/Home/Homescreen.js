import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  useLazyGetAllProductsQuery,
  useLazyGetSingleProductQuery,
} from '../../services/productApi';

const Homescreen = () => {
  const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  const [getSingleProduct, singleResponse] = useLazyGetSingleProductQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        await getAllProducts();
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [getAllProducts]);

  useEffect(() => {
    (async () => {
      try {
        await getSingleProduct('PR-176081763608');
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [getSingleProduct]);

  allResponse.data && console.log(allResponse.data, 'All products');
  singleResponse.data && console.log(singleResponse.data, 'single product');

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

export default Homescreen;
