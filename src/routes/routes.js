import CartScreen from '../screen/CartScreen';
import CategoryScreen from '../screen/CategoryScreen';
import HomeScreen from '../screen/HomeScreen';
import {
  faHome,
  faCartArrowDown,
  faBoxes,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import SearchScreen from '../screen/SearchScreen';

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
];

export default screens;
