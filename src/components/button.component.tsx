import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

interface ButtonProps {
  onPress: () => void;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  title: string;
  isLoading?: boolean;
}

export const Button = ({
  onPress,
  type = 'primary',
  size = 'large',
  title,
  isLoading = false,
}: ButtonProps) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tailwind('rounded-2xl items-center justify-center'),
        type === 'primary'
          ? tailwind('bg-red-900')
          : tailwind('border border-red-800'),
        size === 'large' ? tailwind('p-6') : tailwind('p-4'),
      ]}>
      {isLoading ? (
        <View style={tailwind('h-7 items-center justify-center')}>
          <ActivityIndicator
            color={type === 'primary' ? '#FFFFFF' : '#991B1E'}
          />
        </View>
      ) : (
        <Text
          style={[
            tailwind('h-7 font-bold text-lg'),
            type === 'primary'
              ? tailwind('text-gray-200')
              : tailwind('text-red-800'),
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
