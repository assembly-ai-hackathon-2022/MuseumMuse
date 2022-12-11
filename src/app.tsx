import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './app.navigator';
import utilities from '../tailwind.json';

export const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
};
