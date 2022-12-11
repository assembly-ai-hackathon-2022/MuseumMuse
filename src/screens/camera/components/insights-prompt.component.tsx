import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Button} from '../../../components';

interface InsightsPromptProps {
  text: string;
  handleSeeInsights: () => Promise<void>;
  areInsightsLoading: boolean;
}

export const InsightsPrompt = ({
  text,
  handleSeeInsights,
  areInsightsLoading,
}: InsightsPromptProps) => {
  const tailwind = useTailwind();

  return (
    <>
      <Text style={tailwind('text-lg text-red-900 font-bold mb-4')}>
        You want to know more about this artist and artwork?
      </Text>
      <ScrollView style={tailwind('mb-4')}>
        <Text style={tailwind('text-sm text-gray-800')}>{text}</Text>
      </ScrollView>
      <Button
        title="Let's go!"
        type="secondary"
        size="small"
        onPress={handleSeeInsights}
        isLoading={areInsightsLoading}
      />
    </>
  );
};
