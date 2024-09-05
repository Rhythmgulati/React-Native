import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FlatCard from './components/FlatCard';


function App():JSX.Element{
  return (
    <SafeAreaView>
      <View>
      <FlatCard/>
        <Text>Hello World!!</Text>
        <Text>Hello World!!</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;