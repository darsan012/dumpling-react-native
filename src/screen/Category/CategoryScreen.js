import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useLazyGetAllProductsQuery} from '../../services/productApi';
import {useLazyGetAllCategoriesQuery} from '../../services/categoryApi';

import CardComponent from '../../components/CardComponent';
import MenuComponent from '../../components/MenuComponent';
import momo from '../../assets/momo2.jpg';
import {useDispatch} from 'react-redux';

const Categoryscreen = () => {
  const [getAllCategories, response] = useLazyGetAllCategoriesQuery();
  const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  const [selectedId, setSelectedId] = useState(null);
  const [horizontalData] = useState([]);
  const dispatch = useDispatch();

  //for getting data from the api
  useEffect(() => {
    (async () => {
      try {
        await getAllCategories();
        await getAllProducts();
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [getAllCategories, getAllProducts]);

  const categoryData = response.data && response.data.data;
  const productData = allResponse.data && allResponse.data.data;
  // console.log(productData, categoryData);

  //for setting data for vertical scrollbar
  const empty = arr => (arr.length = 0);
  useEffect(() => {
    if (productData && categoryData) {
      empty(horizontalData);
      productData.map((obj, index) => {
        if (obj.category._id === selectedId) {
          horizontalData.push(obj);
        }
      });
    }
  }, [selectedId, dispatch]);
  // console.log(horizontalData);
  const renderItem = ({item}) => {
    const initialState = item._id === selectedId ? true : false;
    return (
      <MenuComponent
        item={item}
        onPress={() => setSelectedId(item._id)}
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
          {response.data && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={response.data.data}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          )}
        </View>
        {horizontalData && (
          <FlatList
            data={horizontalData}
            renderItem={({item}) => <CardComponent item={item} />}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
          />
        )}
        {!selectedId && productData && (
          <FlatList
            data={productData}
            renderItem={({item}) => <CardComponent item={item} />}
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
