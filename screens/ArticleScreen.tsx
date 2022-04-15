import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {getArticle} from '../api/articles';
import {getComments} from '../api/comments';
import {RootStackParamList} from './types';

type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
  const {params} = useRoute<ArticleScreenRouteProp>();
  const {id} = params;

  const articleQuery = useQuery(['articles', id], () => getArticle(id));
  const commentsQuery = useQuery(['commetns', id], () => getComments(id));

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
