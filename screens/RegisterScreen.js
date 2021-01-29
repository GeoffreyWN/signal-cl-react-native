import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View  } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Input, Button, Text } from 'react-native-elements'
import { auth } from '../firebase'

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
        })
        // return () => {  };
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then((authUser) => { 
            authUser.user.update({
                displayName: name,
                photoURL: imageUrl || 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430__340.png'
            });
        })
        .catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create Signal Account</Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full name" value={name} type="text" autofocus onChangeText={text => setName(text)} />

                <Input placeholder="Email" value={email} type="email" onChangeText={text => setEmail(text)} />

                <Input placeholder="Password" value={password} type="password" secureTextEntry  onChangeText={text => setPassword(text)} />

                <Input placeholder="Profile Pic (optional)" value={imageUrl} type="text"  onChangeText={text => setImageUrl(text)} onSubmitEditing={register} />
            </View>
            <Button raised containerStyle={styles.button}  onPress={register} title="Register" />
            <View style={{ height: 100 }}/>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor:'white'
    },
    inputContainer: {
        width:300,
    },
    button:{
        width:200,
        marginTop: 10,
    }
})
