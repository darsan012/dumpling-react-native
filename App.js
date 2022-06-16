import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import IconComponent from './src/components/IconComponent';

import screens from './src/routes/routes';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: obj.showHeader,
                tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
              })}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

