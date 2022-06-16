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
    name: 'Cart',
    component: CartScreen,
    showHeader: false,
    icon: faCartArrowDown,
  },
  {
    name: 'Category',
    component: CategoryScreen,
    showHeader: false,
    icon: faBoxes,
  },
];

export default screens;
