import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';


function App():JSX.Element{
  return (
    <SafeAreaView>
      <View>
      <FlatCard/>
      <ElevatedCard/>
      </View>
    </SafeAreaView>
  )
}

export default App;