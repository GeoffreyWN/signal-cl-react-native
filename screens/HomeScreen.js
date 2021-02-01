import React, {useLayoutEffect} from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth } from "../firebase";
import { AntDesign, SimpleLineIcons } from "react-native-vector-icons" 

import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({navigation}) => {
    const signOutUser =  () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }
    console.log(auth.currentUser)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "white"},
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={signOutUser} >
                    {/* <Avatar rounded source={{
                        uri: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
                    }}/> */}
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }}>

                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AddChat")}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>    

                </View>
            )
        });
        // return () => { };
    }, [navigation])
    return (
        <SafeAreaView>
           <ScrollView>
                <CustomListItem/>
           </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
