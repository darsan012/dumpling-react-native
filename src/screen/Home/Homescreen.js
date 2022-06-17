import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useLazyGetAllProductsQuery} from '../services/productApi';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.jpg';
import {Constants} from '../../constants/Constants';
import FeaturedCard from '../../components/FeaturedCard';
import chilly from '../../assets/chillyMomo.jpg';
import {useGetFeaturedProductQuery} from '../../services/productApi';
// import {useLazyGetAllProductsQuery} from '../services/productApi';

const HomeScreen = ({navigation}) => {
  // const [getAllProducts, response] = useLazyGetAllProductsQuery();
  const {data, isLoading, error} = useGetFeaturedProductQuery();
  const clickCard = id => {
    navigation.navigate('ProductDetail', {
      itemId: id,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ImageBackground source={hero} style={styles.hero}>
            <View style={styles.logoView}>
              <Image source={logo} style={styles.logo} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.featuredView}>
          <Text style={styles.featuredText}>Featured Items</Text>
          {isLoading && <Text style={{color: 'black'}}>Loading....</Text>}
          {error && <Text style={{color: 'black'}}>Error....</Text>}
          {data &&
            data.data.map(obj => (
              <FeaturedCard
                key={obj.productId}
                momoImage={chilly}
                momoName={obj.name}
                momoPrice={obj.price}
                momoDescription={obj.description}
                handlePress={() => clickCard(obj.productId)}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  hero: {
    height: 300,
    width: '100%',
  },
  logoView: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredView: {
    marginVertical: 15,
    alignItems: 'center',
  },
  featuredText: {
    color: Constants.color.primaryColor,
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
