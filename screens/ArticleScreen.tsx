import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';
import Articles from '../components/Articles';
import {RootStackParamList} from './types';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
  const {params} = useRoute<ArticleScreenRouteProp>();
  //   const {data, isLoading} = useQuery('articles', getArticles);

  //   if (!data) {
  //     return <ActivityIndicator size="large" style={styles.spinner} />;
  //   }
  //   return <Articles articles={data} />;
  // }

  return (
    <View style={styles.block}>
      <Text>{params.id}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
  block: {},
});

export default ArticleScreen;
