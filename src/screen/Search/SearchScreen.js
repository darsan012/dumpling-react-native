import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from '../../components/Headers';
import IconComponent from '../../components/IconComponent';
import Input from '../../components/Input';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import FeaturedCard from '../../components/FeaturedCard';
import chilly from '../../assets/chillyMomo.jpg';
import {useGetAllProductsQuery} from '../../services/productApi';
import {Images} from '../../constants/Images';

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
  let filteredItems = [];
  data && (filteredItems = filterProduct(data.data, query));
  const clickCard = (id, img) => {
    navigation.navigate('ProductDetail', {
      itemId: id,
      itemImage: img,
    });
  };
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <Header text="Find your favorite MOMO" fontSize={25} />
        <View style={styles.searchWrapper}>
          <View style={styles.searchBar}>
            <Input
              placeholder="Search by name, category..."
              searchQueryHandler={setQuery}
              value={query}
            />
          </View>
          {/* <IconComponent iconName={faFilter} size={25} /> */}
        </View>
        {isLoading && <Text style={{color: 'black'}}>Loading....</Text>}
        {error && <Text style={{color: 'black'}}>Error....</Text>}
        {data &&
          (filterProduct(data.data, query).length !== 0 ? (
            filterProduct(data.data, query).map((obj, i) => (
              <FeaturedCard
                key={obj.productId}
                momoImage={Images[i]}
                momoName={obj.name}
                momoPrice={obj.price}
                momoDescription={obj.description}
                handlePress={() => clickCard(obj.productId, Images[i])}
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
