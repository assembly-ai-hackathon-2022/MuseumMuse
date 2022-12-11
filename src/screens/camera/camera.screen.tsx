import React, {useCallback, useEffect, useState} from 'react';
import Reanimated, {runOnJS, useSharedValue} from 'react-native-reanimated';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTailwind} from 'tailwind-rn';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {scanOCR} from 'vision-camera-ocr';
import {Button, LoadingIndicator} from '../../components';
import {Insights} from './components';

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const shouldScan = useSharedValue(false);
  const [foundText, setFoundText] = useState<string | null>(null);
  const [isFindingText, setIsFindingText] = useState<boolean>(false);

  useEffect(() => {
    const confirmPermission = async (): Promise<void> => {
      const cameraPermission = await Camera.getCameraPermissionStatus();

      if (cameraPermission === 'authorized') {
        setHasPermission(true);
        return;
      }

      const permission = await Camera.requestCameraPermission();

      if (permission === 'authorized') {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    };

    confirmPermission();
  }, []);

  const tailwind = useTailwind();
  const devices = useCameraDevices();
  const device = devices.back;

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    if (!shouldScan.value) {
      return;
    }

    const {result} = scanOCR(frame);

    runOnJS(setFoundText)(result.blocks.map(block => block.text).join('\n'));
    runOnJS(setIsFindingText)(false);

    shouldScan.value = false;
  }, []);

  const handleScanResetPress = useCallback((): void => {
    setFoundText(null);
  }, []);

  const handleScanButtonPress = useCallback((): void => {
    shouldScan.value = true;
    setIsFindingText(true);
  }, [shouldScan]);

  if (!device || !hasPermission) {
    return <LoadingIndicator />;
  }

  return (
    <View style={tailwind('flex-1')}>
      <View
        pointerEvents="none"
        style={tailwind('absolute flex-1 h-full w-full z-0')}>
        <ReanimatedCamera
          style={tailwind('flex-1')}
          device={device}
          isActive
          frameProcessor={frameProcessor}
          frameProcessorFps={1}
          focusable
        />
      </View>
      <SafeAreaView mode="padding" style={tailwind('mx-8 flex-1 z-20')}>
        <View style={tailwind('flex-1 justify-end')}>
          {foundText ? <Insights text={foundText} /> : null}
        </View>
        {foundText ? (
          <Button title="Scan another label" onPress={handleScanResetPress} />
        ) : (
          <Button
            title="Scan museum label"
            onPress={handleScanButtonPress}
            isLoading={isFindingText}
          />
        )}
      </SafeAreaView>
    </View>
  );
};
