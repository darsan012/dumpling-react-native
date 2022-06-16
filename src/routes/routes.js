import CartScreen from '../screen/Cart/CartScreen';
import CategoryScreen from '../screen/Category/CategoryScreen';
import HomeScreen from '../screen/Home/HomeScreen';
import SearchScreen from '../screen/Search/SearchScreen';
import {
  faHome,
  faCartArrowDown,
  faBoxes,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import ProductDetail from '../screen/ProductDetail/ProductDetail';

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    showHeader: false,
    icon: faHome,
  },
  {
    name: 'Search',
    component: SearchScreen,
    showHeader: false,
    icon: faSearch,
  },
  {
    name: 'Category',
    component: CategoryScreen,
    showHeader: false,
    icon: faBoxes,
  },
  {
    name: 'Cart',
    component: CartScreen,
    showHeader: false,
    icon: faCartArrowDown,
    badge:true
  },
  {
    name: 'ProductDetail',
    component: ProductDetail,
    showHeader: false,
    icon: faCartArrowDown,
  },

];

export default screens;
