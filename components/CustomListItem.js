import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat}) => {
    return (
        <ListItem>
           <Avatar rounded source={{
               uri: "https://www.flaticon.com/svg/vstatic/svg/3409/3409701.svg?token=exp=1612169602~hmac=dad047b2e89474b3e87c2eaad664a23c"
           }}/>
           <ListItem.Content>
               <ListItem.Title style={{ fontWeight: "800"}}>
                    Cool Chat
               </ListItem.Title>
               <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                   Awesome things coming this way my people
               </ListItem.Subtitle>
           </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
