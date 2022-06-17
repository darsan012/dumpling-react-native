import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import {faPlus, faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import hero from '../../assets/hero.jpg';
import Header from '../../components/Headers';
import ButtonComponent from '../../components/ButtonComponent';
import {Constants} from '../../constants/Constants';
import UpDownButton from '../../components/UpDownButton';
import {useLazyGetSingleProductQuery} from '../../services/productApi';

const ProductDetail = ({route, navigation}) => {
  const [cartClick, cartClickSet] = useState(false);
  const [productDetail, productDetailSet] = useState('');
  const [getProductDetail, response] = useLazyGetSingleProductQuery();
  const {itemId} = route.params;
  const handleCartClick = () => {
    cartClickSet(true);
  };
  useEffect(() => {
    getProductDetail(itemId).then(res => productDetailSet(res));
  }, [getProductDetail, itemId]);

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
            onPress={handleCartClick}
          />
          <ButtonComponent
            text="Buy Now"
            color={Constants.color.colorSuccess}
            filled={true}
            iconName={faCartArrowDown}
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
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default ProductDetail;
