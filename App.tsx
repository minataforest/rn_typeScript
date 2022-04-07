import React from 'react';
import {View, Text} from 'react-native';
import MessageForm from './MessageForm';
import Profile from './Profile';

function App() {
  return (
    <View>
      <Profile name="John Doe">
        <Text>Hello World</Text>
      </Profile>
      <Profile name="John Doe" isActive={true}>
        <Text style={{color: 'red'}}>Hello World</Text>
      </Profile>
      <Profile name="John Doe" image="https://picsum.photos/200">
        <Text>Hello World</Text>
      </Profile>
      <MessageForm />
      <Text>ddd</Text>
    </View>
  );
}

export default App;
