import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';
import hero from '../../assets/hero.jpg';
import Header from '../../components/Headers';
import ButtonComponent from '../../components/ButtonComponent';
import {Constants} from '../../constants/Constants';
import UpDownButton from '../../components/UpDownButton';
import {useLazyGetSingleProductQuery} from '../../services/productApi';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../store/slices/cartSlice';
import {faCartArrowDown,faPlus} from 'react-native-vector-icons/FontAwesome5';


const ProductDetail = ({route, navigation}) => {
  const [productDetail, productDetailSet] = useState('');
  const [getProductDetail] = useLazyGetSingleProductQuery();
  const dispatch = useDispatch();
  const {itemId, itemImage} = route.params;
  const {cart} = useSelector(state => state.cart);

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
  const handlePress = () => {
    navigation.navigate('Cart');
  };
  useEffect(() => {
    getProductDetail(itemId).then(res => productDetailSet(res));
  }, [getProductDetail, itemId]);

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <Header text="Detail about Product" fontSize={23} />
        <Image source={itemImage} style={styles.cardImage} />
        {productDetail.length !== 0 && (
          <View style={styles.momoDetails}>
            <Text style={styles.momoName}>{productDetail.data.data.name}</Text>
            <Text style={styles.momoDescription}>
              {productDetail.data.data.description}
            </Text>
            <Text style={styles.momoPrice}>
              Rs. {productDetail.data.data.price}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 3,
              }}>
              Avaialble Stocks:
              <Text
                style={{
                  fontSize: 16,
                  color: 'green',
                  fontWeight: 'bold',
                  marginTop: 17,
                }}>
                {' '}
                {productDetail.data.data.stockQuantity}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 17,
              }}>
              Ingredients:
            </Text>
            <Text style={styles.momoIngredients}>
              Momo म:म: - also known as momo-cha ममचा are bite-size dumplings
              made with a spoonful of stuffing wrapped in dough. Momo are
              usually steamed, though they are sometimes fried or steam-fried.
              Meat or vegetables fillings becomes succulent as it produces an
              intensively flavored broth sealed inside the wrappers.
            </Text>
          </View>
        )}
        {cart.filter(item => item.productId === itemId).length !== 0 && (
          <UpDownButton id={itemId} cart={cart} />
        )}
        <View style={styles.buttonWrapper}>
          {productDetail.data && (
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
                  productDetail.data.data.stockQuantity,
                )
              }
            />
          )}
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
    borderRadius: 5,
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
    fontSize: 27,
    fontWeight: 'bold',
    color: Constants.color.primaryColor,
  },
  momoPrice: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: '400',
    color: Constants.color.colorSuccess,
    marginBottom: 5,
  },
  momoDescription: {
    color: 'gray',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 6,
  },
  momoIngredients: {
    color: 'gray',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: '10%',
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    width: 390,
  },
});
export default ProductDetail;
