import { View, Text, ImageBackground,StyleSheet,Image } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
   <ImageBackground source={require("../../assets/back.jpg")} style={styles.back}  blurRadius={8}>
<View  style={styles.logoContainer}>
    <Image source={require("../../assets/logo.jpg")} style={styles.logo} />
    <Text style={styles.tagline}>training is going on</Text>
</View>
<View style={styles.buttonsContainer}>
<AppButton title={"Login"} />
<AppButton title={"Register"} color='secondary' />


</View>
   </ImageBackground>
  )
}

const styles = StyleSheet.create({
    back:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"

    },
          register:{
            width:"100%",
            height:70,
            backgroundColor:"orange",
            // alignSelf:"flex-end"
          },
          logo:{
            width:100,
            height:100,
        },
        logoContainer:{
              position:"absolute",
              top:70,
              alignItems:"center"

          },
          buttonsContainer:{
            padding:20,
            width:"100%"

          },
          tagline:{
            color:colors.white,
            fontSize:25,
            fontWeight:600,
            paddingVertical:20
          }
})