import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Button} from '../../../components';

interface InsightsResultProps {
  insights: string | Error;
  handleSeeInsights: () => Promise<void>;
  areInsightsLoading: boolean;
}

export const InsightsResult = ({
  insights,
  handleSeeInsights,
  areInsightsLoading,
}: InsightsResultProps) => {
  const tailwind = useTailwind();

  if (typeof insights === 'string') {
    return (
      <>
        <ScrollView style={tailwind('mb-4')}>
          <Text style={tailwind('text-sm text-gray-800')}>{insights}</Text>
        </ScrollView>
        <Button
          title="What else?"
          type="secondary"
          size="small"
          onPress={handleSeeInsights}
          isLoading={areInsightsLoading}
        />
      </>
    );
  }

  return (
    <>
      <ScrollView style={tailwind('mb-4')}>
        <Text style={tailwind('text-sm text-gray-800')}>
          No info was found.
        </Text>
      </ScrollView>
      <Button
        title="Try again"
        type="secondary"
        size="small"
        onPress={handleSeeInsights}
        isLoading={areInsightsLoading}
      />
    </>
  );
};
