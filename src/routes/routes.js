import CartScreen from '../screen/Cart/CartScreen';
import CategoryScreen from '../screen/Category/CategoryScreen';
import HomeScreen from '../screen/Home/Homescreen';
import SearchScreen from '../screen/Search/SearchScreen';
import CheckoutScreen from '../screen/Checkout/CheckoutPage';

import ProductDetail from '../screen/ProductDetail/ProductDetail';

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    showHeader: false,
    icon: 'home',
  },
  {
    name: 'Search',
    component: SearchScreen,
    showHeader: false,
    icon: 'search',
  },
  {
    name: 'Category',
    component: CategoryScreen,
    showHeader: false,
    icon: 'boxes',
  },
  {
    name: 'Cart',
    component: CartScreen,
    showHeader: false,
    icon: 'cart-arrow-down',
    badge: true,
  },
  {
    name: 'ProductDetail',
    component: ProductDetail,
    showHeader: false,
    icon: 'cart-arrow-down',
  },
  {
    name: 'Checkout',
    component: CheckoutScreen,
    showHeader: false,
    icon: 'cannabis',
  },
];

export default screens;
