import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Icon = ({
    name,
    size = 40,
    backgroundColor= "#000",
    iconColor="#fff"
}) => {
  return (
    <View style={{
        width:size,
        height:size,
        borderRadius:size/2,
        backgroundColor:backgroundColor,
        justifyContent:"center",
        alignItems:"center"
    }}>
        <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />

      
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({})