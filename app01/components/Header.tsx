import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headercontainer}>
        <Image
        source={require("../assets/WhatsApp.jpeg")}
        style={styles.imagest}
        />
      <Text style={[styles.textst]}>Rhythm Gulati</Text>
      <Text style={[styles.textst,styles.description]}>FullStackDeveloper || Devops || Freelancer</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    imagest:{
        height:100,
        width:100,
        borderRadius:100,
        marginBottom:10
    },
    headercontainer:{
        height:300,
        width:'90%',
        // backgroundColor:"white",
        margin:'auto',
        padding:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textst:{
        color:'white',
        fontSize:18
    },
    description:{
        color:"grey",
        fontSize:15
    }
})