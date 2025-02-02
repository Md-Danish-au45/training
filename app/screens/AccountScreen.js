import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from './ListItem'
import Screen from './Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeperator from '../components/ListItemSeperator'

const menuItems = [
    {
        title : "my listing",
        icon : {
            name : "format-list-bulleted",
            backgroundColor:colors.primary
        } ,
    },

    {
        title : "my messsages",
        icon : {
            name : "email",
            backgroundColor:colors.secondary
        } ,  
    }
    
]
const AccountScreen = () => {
  return (
<Screen style={styles.scree}>
    <View style={styles.container}>
    <ListItem  title="Training" subTitle="training is live" image={require("../../assets/back.jpg")}/>
    </View>

    <View style={styles.container}>
        <FlatList 
        data={menuItems}
        keyExtractor={menuItem => menuItem.title}
        ItemSeparatorComponent={ListItemSeperator}
        renderItem={({item}) =>
            <ListItem 
            title={item.title}
            IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
            }
            />

        }

        />
    </View>
    <ListItem 
    title="Logout"
    IconComponent={
        <Icon name="logout" backgroundColor='#ffe66d' />
    }

    />
</Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light
    }
})