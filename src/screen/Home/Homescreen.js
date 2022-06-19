import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import logo from '../../assets/logo.png';
// import hero from '../../assets/hero.jpg';
import hero from '../../assets/momo2.jpg';
import {Constants} from '../../constants/Constants';
import FeaturedCard from '../../components/FeaturedCard';
import {useGetFeaturedProductQuery} from '../../services/productApi';
import {Images} from '../../constants/Images';

const HomeScreen = ({navigation}) => {
  const {data, isLoading, error} = useGetFeaturedProductQuery();
  const clickCard = (id, img) => {
    navigation.navigate('ProductDetail', {
      itemId: id,
      itemImage: img,
    });
  };
  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={hero}
            style={styles.hero}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: 200,
              resizeMode: 'cover',
            }}>
            <View style={styles.logoView}>
              <Image source={logo} style={styles.logo} />
            </View>
          </ImageBackground>
          <View style={{paddingBottom: 15, marginTop: -30}}>
            <Text style={styles.featuredText}>Featured Items</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.featuredView}>
            {isLoading && <Text style={{color: 'black'}}>Loading....</Text>}
            {error && <Text style={{color: 'black'}}>Error....</Text>}
            {data &&
              data.data.map((obj, i) => (
                <FeaturedCard
                  key={obj.productId}
                  momoImage={Images[i]}
                  momoName={obj.name}
                  momoPrice={obj.price}
                  momoDescription={obj.description}
                  handlePress={() => clickCard(obj.productId, Images[i])}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  hero: {
    height: 250,
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
