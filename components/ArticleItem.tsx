import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Pressable, Text, View, Platform} from 'react-native';

export interface ArticleItemProps {
  id: number;
  title: string;
  publishedAt: string;
  username: string;
}

export default function ArticleItem({
  id,
  title,
  publishedAt,
  username,
}: ArticleItemProps) {
  const onPress = () => {
    console.log(id);
  };

  const fommattedDate = new Date(publishedAt).toLocaleString();

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && styles.pressed,
      ]}
      onPress={onPress}
      android_ripple={{color: '#eeeeee'}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.footer}>
        <Text style={styles.smallText}>{username}</Text>
        <Text style={styles.smallText}>{fommattedDate}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  pressed: {
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 16,
  },
  smallText: {
    fontSize: 10,
    color: '#546e7a',
  },
});
