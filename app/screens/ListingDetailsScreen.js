import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from './ListItem'

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/back.jpg")}  />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>Black jacket for sale</AppText>
      <AppText style={styles.price}>$1000</AppText>
      <View style={styles.userContainer}>

      <ListItem 
      image={require("../../assets/back.jpg")}
      title = {"Danish Training"}
      subTitle = {"training is going on"}
      onPress={() =>console.log("message selected")}
      />
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
        // backgroundColor:colors.secondary
    },
    image:{
        width:"100%",
        height:300
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        // color:colors.primary,
        fontWeight:"500"
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        marginVertical:10,
        fontSize:20 
    },
    userContainer:{
      marginVertical:40,
    }
})