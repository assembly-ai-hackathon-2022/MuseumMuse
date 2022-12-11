import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './app.routes';
import {CameraScreen} from './screens/camera';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerTransparent: true, headerTitle: ''}}>
      <Stack.Screen name={AppRoutes.Camera} component={CameraScreen} />
    </Stack.Navigator>
  );
};
