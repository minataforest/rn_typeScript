import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Article} from '../api/types';
import ArticleItem from './ArticleItem';

export interface ArticleProps {
  articles: Article[];
}
export default function Articles({articles}: ArticleProps) {
  return (
    <FlatList
      data={articles}
      renderItem={({item}) => (
        <ArticleItem
          id={item.id}
          title={item.title}
          publishedAt={item.published_at}
          username={item.user.username}
        />
      )}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() =>
        // articles가 1개 이상 있을 때만최하단 테두리 보여주기
        articles.length > 0 ? <View style={styles.separator} /> : null
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {flex: 1},
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#cfd8dc',
  },
});
