import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const ListItemDeleteActions = ({onPress}) => {


  return (

    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={30} color={colors.white} />
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteActions

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.danger,
        width:70,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        // flex:1
    }
})