/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import screens from './src/routes/routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(obj => (
          <Stack.Screen
            key={obj.name}
            name={obj.name}
            component={obj.component}
            options={{headerShown: obj.showHeader}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
