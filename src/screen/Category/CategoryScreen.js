import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useLazyGetAllCategoriesQuery} from '../../services/categoryApi';
import {useLazyGetProductCategoryWiseQuery} from '../../services/productApi';

import CardComponent from '../../components/CardComponent';
import MenuComponent from '../../components/MenuComponent';
import momo from '../../assets/momo2.jpg';

const Categoryscreen = () => {
  const [getAllCategories, response] = useLazyGetAllCategoriesQuery();
  const [getProductCategoryWise, getResponse] =
    useLazyGetProductCategoryWiseQuery();

  const [selectedId, setSelectedId] = useState('CG-1027626036322');

  //for getting data from the api
  useEffect(() => {
    (async () => {
      try {
        await getAllCategories();
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [getAllCategories]);

  useEffect(() => {
    (async () => {
      try {
        await getProductCategoryWise(selectedId);
      } catch (error) {
        console.log(error, 'error');
      }
    })();
  }, [selectedId, getProductCategoryWise]);

  const productData = getResponse.data && getResponse.data.data;

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
          {response.data && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={response.data.data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
        </View>
        {productData && (
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
