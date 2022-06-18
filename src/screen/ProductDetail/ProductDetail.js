import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {faPlus, faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import hero from '../../assets/hero.jpg';
import Header from '../../components/Headers';
import ButtonComponent from '../../components/ButtonComponent';
import {Constants} from '../../constants/Constants';
import UpDownButton from '../../components/UpDownButton';
import {useLazyGetSingleProductQuery} from '../../services/productApi';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../store/slices/cartSlice';

const ProductDetail = ({route, navigation}) => {
  const [cartClick, cartClickSet] = useState(false);
  const [productDetail, productDetailSet] = useState('');
  const [getProductDetail, response] = useLazyGetSingleProductQuery();
  const dispatch = useDispatch();
  const {itemId} = route.params;
  const handleCartClick = (id, name, price, description,hero) => {
    cartClickSet(true);
    // dispatch(addToCart({id, name, price, description,hero}));
  };
  const handlePress = () => {
    navigation.navigate("Cart")
  }
  useEffect(() => {
    getProductDetail(itemId).then(res => productDetailSet(res));
  }, [getProductDetail, itemId]);

  // console.log(productDetail, 'prnfcbh');
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <Header text="Detail about Product" fontSize={30} />
        <Image source={hero} style={styles.cardImage} />
        {productDetail.length !== 0 && (
          <View style={styles.momoDetails}>
            <Text style={styles.momoName}>{productDetail.data.data.name}</Text>
            <Text style={styles.momoPrice}>
              Rs. {productDetail.data.data.price}
            </Text>
            <Text style={styles.momoDescription}>
              {productDetail.data.data.description}
            </Text>
          </View>
        )}
        {cartClick && <UpDownButton />}
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            text="Add to Cart"
            color={Constants.color.colorWarning}
            filled={true}
            iconName={faPlus}
            borderRadius={8}
            onPress={() =>
              handleCartClick(
                itemId,
                productDetail.data.data.name,
                productDetail.data.data.price,
                productDetail.data.data.description,
                hero,
              )
            }
          />
          <ButtonComponent
            text="Buy Now"
            color={Constants.color.colorSuccess}
            filled={true}
            borderRadius={8}
            iconName={faCartArrowDown}
            onPress={handlePress}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  cardImage: {
    height: 200,
    width: '98%',
    marginHorizontal: 5,
    marginBottom: 20,
  },
  momoDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  momoName: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Constants.color.primaryColor,
  },
  momoPrice: {
    marginTop: 15,
    fontSize: 28,
    color: Constants.color.colorSuccess,
  },
  momoDescription: {
    color: Constants.color.primaryColor,
    fontSize: 20,
    marginTop: 20,
    marginBottom:20
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    width:390
  },
});
export default ProductDetail;
