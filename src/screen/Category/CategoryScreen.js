import React, {useEffect, useState} from 'react';
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
import {useLazyGetAllCategoriesQuery} from '../../services/categoryApi';

import {getProductData} from '../../store/slices/productSlice';

import CardComponent from '../../components/CardComponent';
import MenuComponent from '../../components/MenuComponent';
import momo from '../../assets/momo2.jpg';
import {Items} from '../../constants/MenuItem';

const Categoryscreen = () => {
  const [getAllCategories, response] = useLazyGetAllCategoriesQuery();
  const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  const productData = useSelector(state => state.productDetails.productData);
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await getAllCategories();
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [getAllCategories]);

  const categoryName = response.data && response.data.data;
  // console.log(categoryName);

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
  const renderItem = ({item}) => {
    const initialState = item.id === selectedId ? true : false;
    return (
      <MenuComponent
        item={item}
        onPress={() => setSelectedId(item.id)}
        initialState={{initialState}}
      />
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={momo}
            style={styles.topSection}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}></ImageBackground>
        </View>
        <Text
          style={{
            color: 'black',
            alignSelf: 'flex-start',
            paddingLeft: 22,
            marginTop: 10,
            marginBottom: -5,
            fontSize: 20,
            color: 'rgb(0,0,0)',
            fontWeight: '500',
          }}>
          Menu
        </Text>
        <View style={styles.topScrollBar}>
          {categoryName && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoryName}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
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
