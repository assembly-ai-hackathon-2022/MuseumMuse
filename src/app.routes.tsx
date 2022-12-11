import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum AppRoutes {
  Camera = 'Camera',
}

export interface AppRoutesParamList extends ParamListBase {
  [AppRoutes.Camera]: undefined;
}

export type AppRoutesNavigationProp<
  RouteName extends keyof AppRoutesParamList,
> = NativeStackNavigationProp<AppRoutesParamList, RouteName>;

export type AppRoutesRouteProp<RouteName extends keyof AppRoutesParamList> =
  RouteProp<AppRoutesParamList, RouteName>;

export type AppRoutesScreenProps<RouteName extends keyof AppRoutesParamList> =
  NativeStackScreenProps<AppRoutesParamList, RouteName>;
