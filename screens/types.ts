import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigationScreenParams,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/stack';

// Main Tab
export type MainTabParamList = {
  Articles: undefined;
};

export type MainTabNavigarionScreenParams =
  NavigatorScreenParams<MainTabParamList>;
export type MainTabNavigarionProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;
export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;

// Root Stack
export type RootStackParamList = {
  MainTab: MainTabNavigarionScreenParams;
  Article: {id: number};
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
