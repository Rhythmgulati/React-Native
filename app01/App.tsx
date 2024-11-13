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
import LinkCard from './components/LinkCard';
import Contact from './components/Contact';


function App():JSX.Element{
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard/>
      <ElevatedCard/>
      <FancyCard/>
      <LinkCard/>
      <Contact/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;