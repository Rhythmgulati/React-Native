import React from 'react'

import { 
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native"

function AppPro(){
    const isDarkMode = useColorScheme()==='dark'
    return(
      <SafeAreaView>
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.blackText:styles.blackText}>Hello</Text>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        alignItems:'center',
        justifyContent:"center"
    },
    whiteText:{
        color:'#ffffff'
    },
    blackText:{
        color:'black'
    }

})

export default AppPro