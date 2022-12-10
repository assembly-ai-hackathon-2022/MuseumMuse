import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './app.navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
