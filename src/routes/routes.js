import Homescreen from '../screen/Home/Homescreen';
import Categoryscreen from '../screen/Home/Categoryscreen';

const screens = [
  {
    name: 'Category',
    component: Categoryscreen,
    showHeader: true,
  },
  {
    name: 'Home',
    component: Homescreen,
    showHeader: false,
  },
];

export default screens;
