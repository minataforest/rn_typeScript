import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './types';
import ArticleScreen from './ArticleScreen';
import MateralIcons from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from 'react-query';

function Sample(id) {
  const result = useQuery('articles', getArticles, {
    enabled: true,
    refetchOnMount: true,
  });
  const {data, error, isLoading} = result;

  if (isLoading) return <Text>로딩 중</Text>;
  if (error) return <Text>오류 발생</Text>;
  return <View>{/* 데이터 보여주기 */}</View>;
}

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Articles"
        component={ArticleScreen}
        options={{
          title: '게시글 목록',
          tabBarIcon: ({color, size}) => (
            <MateralIcons name="article" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
