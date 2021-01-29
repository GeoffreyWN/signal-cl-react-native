import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Input } from 'react-native-elements'

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const register = () => {
        
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {},
    inputContainer: {}
})
