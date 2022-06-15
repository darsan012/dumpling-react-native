import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyGetAllProductsQuery} from '../../services/productApi';

import {getProductData} from '../../store/slices/productSlice';

import CardComponent from '../../components/CardComponent';
import MenuComponent from '../../components/MenuComponent';
import {Items} from '../../constants/MenuItem';

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
  // console.log(productData, 'down');
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View style={styles.topSection}>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
            Hello Welcome to Dumpling store.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            alignSelf: 'flex-start',
            paddingLeft: 23,
            // paddingTop: 20,
            marginBottom: -17,
            fontWeight: '400',
          }}>
          Menu
        </Text>
        <View style={styles.topScrollBar}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Items}
            renderItem={({item}) => <MenuComponent item={item} />}
          />
        </View>
        {productData && (
          <FlatList
            data={productData.data}
            renderItem={({item}) => <CardComponent item={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  topSection: {
    justifyContent: 'center',
  },
  topScrollBar: {
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 18,
  },
});
export default Categoryscreen;