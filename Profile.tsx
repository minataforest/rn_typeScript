import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
  children: React.ReactNode;
}

function Profile({
  name,
  isActive,
  image = 'https://picsum.photos/200',
  children,
}: Props) {
  return (
    <View style={isActive && style.activeStyle}>
      <Text>{name}</Text>
      <Image source={{uri: image}} style={{height: 200}} />
      <View>{children}</View>
    </View>
  );
}

const style = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
