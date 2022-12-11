import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export const LoadingIndicator = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      <ActivityIndicator size="large" />
    </View>
  );
};
