import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './app.routes';
import {CameraScreen} from './screens/camera';
import {SearchResultScreen} from './screens/search-result';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoutes.Camera} component={CameraScreen} />
      <Stack.Screen
        name={AppRoutes.SearchResult}
        component={SearchResultScreen}
      />
    </Stack.Navigator>
  );
};
