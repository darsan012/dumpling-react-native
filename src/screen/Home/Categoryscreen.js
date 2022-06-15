import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyGetAllProductsQuery} from '../../services/productApi';

import {getProductData} from '../../store/slices/productSlice';

import CardComponent from '../../components/CardComponent';
const Categoryscreen = () => {
  const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  const productData = useSelector(state => state.productDetails.productData);
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

  const data = allResponse.data && allResponse.data.data;
  useEffect(() => {
    (async () => {
      try {
        await (data && dispatch(getProductData({data})));
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [data]);
  console.log(productData, 'down');
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text>This is category screen.</Text>
        {productData && (
          <FlatList
            data={productData.data}
            renderItem={({item}) => <CardComponent item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Categoryscreen;
