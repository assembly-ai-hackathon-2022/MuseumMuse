import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {InsightsPrompt} from './insights-prompt.component';
import {InsightsResult} from './insights-result.component';
import {getInsights} from './insights.utils';

interface InsightsProps {
  text: string;
}

export const Insights = ({text}: InsightsProps) => {
  const tailwind = useTailwind();
  const [insights, setInsights] = useState<string | Error>();
  const [areInsightsLoading, setAreInsightsLoading] = useState(false);

  const handleSeeInsights = useCallback(async () => {
    setAreInsightsLoading(true);

    try {
      const result = await getInsights(text);

      if (result) {
        setInsights(result);
      }
    } catch (error) {
      setInsights(error as Error);
    }

    setAreInsightsLoading(false);
  }, [text]);

  return (
    <View style={tailwind('shrink bg-red-50/90 mb-4 p-4 rounded-2xl')}>
      {insights ? (
        <InsightsResult
          insights={insights}
          handleSeeInsights={handleSeeInsights}
          areInsightsLoading={areInsightsLoading}
        />
      ) : (
        <InsightsPrompt
          text={text}
          handleSeeInsights={handleSeeInsights}
          areInsightsLoading={areInsightsLoading}
        />
      )}
    </View>
  );
};
