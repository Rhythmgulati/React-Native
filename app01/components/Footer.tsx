import { StyleSheet, Text, View , TouchableOpacity , Linking  } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"




const Footer = () => {

const openLink = (url:string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
}

  return (
    <View style={styles.footercontainer}>
      <TouchableOpacity onPress={()=>openLink("https://www.instagram.com/rhytham_gulati/")}>
      <Icon name="instagram" size={40} color="#3b5998" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://github.com/Rhythmgulati')}>
        <Icon name="github" size={40} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/rhythm-gulati/')}>
        <Icon name="linkedin-square" size={40} color="#E1306C" />
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footercontainer:{
        flex:1,
        padding:10,
        width:"90%",
        margin:"auto",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})