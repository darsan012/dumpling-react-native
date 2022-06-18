import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import IconComponent from './src/components/IconComponent';
import screens from './src/routes/routes';
import {store} from './src/store/store';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const App = () => {
  const Main = () => {
    const {totalQuantity} = useSelector(state => state.cart);
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {screens.map(obj => (
            <Tab.Screen
              key={obj.name}
              name={obj.name}
              component={obj.component}
              options={() => ({
                tabBarIcon: ({focused, color}) => {
                  let iconSize;

                  iconSize = focused ? 30 : 27;

                  return (
                    <IconComponent
                      iconName={obj.icon}
                      color={color}
                      size={iconSize}
                    />
                  );
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: obj.showHeader,
                tabBarShowLabel: false,
                ...(obj.name === 'ProductDetail'
                  ? {tabBarItemStyle: {display: 'none'}}
                  : {}),
                ...(obj.name === 'Checkout'
                  ? {tabBarItemStyle: {display: 'none'}}
                  : {}),
                ...(obj.badge
                  ? {tabBarBadge: totalQuantity}
                  : {}),
              })}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
