import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyGetAllProductsQuery} from '../../services/productApi';

const Homescreen = () => {
  const [getAllProducts, response] = useLazyGetAllProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        await getAllProducts();
      } catch (error) {
        console.log(error, 'error');
      }
    };
    getData();
  }, [getAllProducts]);

  console.log(response.error, 'screen');
  response.data && console.log(response.data, 'response data');

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
