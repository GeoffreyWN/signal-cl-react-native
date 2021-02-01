import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home')
      }
    })
    return unsubscribe
  }, [])

    const signIn = () => {
      auth.signInWithEmailAndPassword(email, password).catch( (error) => alert(error))
    }

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}> 
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4f%2FSignal_Blue_Icon.png&f=1&nofb=1",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={[styles.button]} onPress={signIn} title="Login" />
      <Button containerStyle={[styles.button]} type="outline" title="Register" onPress={() => navigation.navigate("Register")} />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white"
  },
  inputContainer: {
    width: 300,
  },
  button:{
      width: 200,
      marginTop: 10,

  }
});
