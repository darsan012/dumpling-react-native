import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyGetAllProductsQuery} from '../../services/productApi';

import {getProductData} from '../../store/slices/productSlice';

import CardComponent from '../../components/CardComponent';
import MenuComponent from '../../components/MenuComponent';
import {Items} from '../../constants/MenuItem';
import momo from '../../assets/momo2.jpg';

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
        <View style={styles.imageContainer}>
          <ImageBackground
            source={momo}
            style={styles.topSection}
            imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            {/* <Text style={styles.imageContainerText}>
              Welcome to the Dumpling store.
            </Text> */}
          </ImageBackground>
        </View>
        <Text
          style={{
            color: 'black',
            alignSelf: 'flex-start',
            paddingLeft: 22,
            // paddingTop: 20,
            marginTop: 10,
            marginBottom: -5,
            fontSize: 20,
            color: 'rgb(0,0,0)',
            fontWeight: '500',
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
            keyExtractor={item => item.productId}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(233,233,235)',
  },
  topSection: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  topScrollBar: {
    width: 360,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(233,233,235)',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingTop: 10,
  },
});
export default Categoryscreen;
