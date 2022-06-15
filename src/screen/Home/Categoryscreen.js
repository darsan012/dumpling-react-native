import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  useLazyGetAllProductsQuery,
  useLazyGetSingleProductQuery,
} from '../../services/productApi';

import CardComponent from '../../components/CardComponent';
const Categoryscreen = () => {
  const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  // const [getSingleProduct, singleResponse] = useLazyGetSingleProductQuery();
  // const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        await getAllProducts();
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [getAllProducts]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await getSingleProduct('PR-176081763608');
  //     } catch (error) {
  //       console.log(error, 'error');
  //     }
  //   })();
  // }, [getSingleProduct]);
  console.log('hello');
  allResponse.data && console.log(allResponse.data.data[0], 'All products');
  // singleResponse.data && console.log(singleResponse.data, 'single product');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <Text>This is category screen.</Text>
          <FlatList
            data={allResponse.data.data}
            renderItem={({item}) => <CardComponent item={item} />}
          />
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
export default Categoryscreen;
