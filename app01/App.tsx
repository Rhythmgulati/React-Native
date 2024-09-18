import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';


function App():JSX.Element{
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard/>
      <ElevatedCard/>
      <FancyCard/>
      <FancyCard/>
      <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;