import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from '../../components/Headers';
import Input from '../../components/Input';
import {useGetAllProductsQuery} from '../../services/productApi';
import {Images} from '../../constants/Images';
import CardComponent from '../../components/CardComponent';
import {addToCart} from '../../store/slices/cartSlice';
import {useDispatch} from 'react-redux';

const filterProduct = (productData, query) => {
  if (query.trim() === '') {
    return productData;
  }
  return productData.filter(data => {
    const productName = data.name.toLowerCase();
    return productName.includes(query.toLowerCase());
  });
};

const SearchScreen = ({navigation}) => {
  const {data, isLoading, error} = useGetAllProductsQuery();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const clickCard = (id, img) => {
    navigation.navigate('ProductDetail', {
      itemId: id,
      itemImage: img,
    });
  };
  const handleCartClick = (id, name, price, description, hero, stock) => {
    dispatch(
      addToCart({
        productId: id,
        name,
        price,
        description,
        hero,
        stockQuantity: stock,
      }),
    );
  };
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <Header text="Find your favorite MOMO" fontSize={23} />
        <View style={styles.searchWrapper}>
          <View style={styles.searchBar}>
            <Input
              placeholder="Search by name, category..."
              searchQueryHandler={setQuery}
              value={query}
            />
          </View>
        </View>
        {isLoading && <Text style={{color: 'black'}}>Loading....</Text>}
        {error && <Text style={{color: 'black'}}>Error....</Text>}
        {data &&
          (filterProduct(data.data, query).length !== 0 ? (
            filterProduct(data.data, query).map((item, index) => (
              <CardComponent
                key={item.productId}
                item={item}
                itemImage={Images[index]}
                handlePress={() =>
                  clickCard(item.productId, Images[index], item.stockQuantity)
                }
                handleCartPress={() =>
                  handleCartClick(
                    item.productId,
                    item.name,
                    item.price,
                    item.description,
                    Images[index],
                    item.stockQuantity,
                  )
                }
              />
            ))
          ) : (
            <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>
              No data found
            </Text>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
  },
  searchBar: {
    width: '89%',
    marginHorizontal: 9,
  },
});

export default SearchScreen;
