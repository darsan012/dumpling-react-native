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

const Categoryscreen = () => {
  const [getAllCategories, response] = useLazyGetAllCategoriesQuery();
  const [getAllProducts, allResponse] = useLazyGetAllProductsQuery();
  const [selectedId, setSelectedId] = useState(null);

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
        {allResponse.data && (
          <FlatList
            data={allResponse.data.data}
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
