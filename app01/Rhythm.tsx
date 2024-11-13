import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import Contact from './components/Contact'

const Rhythm = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Header/>
            <Experience/>
            <Education/>
            <Footer/>
            <Contact/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Rhythm