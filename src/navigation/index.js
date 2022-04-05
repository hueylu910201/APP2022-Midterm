import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrinkScreen from '../screens/DrinkScreen';
import DrinkDetail from '../screens/DrinkDetail';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrinkScreen}
      />
      <Stack.Screen
        name="Detail"
        component={DrinkDetail}
      />
    </Stack.Navigator>
  );
}

export default Navigation;