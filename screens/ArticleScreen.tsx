import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';
import Articles from '../components/Articles';

function ArticleScreen() {
  const {data, isLoading} = useQuery('articles', getArticles);

  if (!data) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }
  return <Articles articles={data} />;
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
});

export default ArticleScreen;
