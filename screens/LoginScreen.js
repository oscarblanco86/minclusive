// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('MainMenu');
  };

  return (
    <>
      <Image source={require('./../assets/logo.png')} style={styles.centeredImage} resizeMode="contain" />
      <View style={styles.container}>
        <Text style={styles.title}>MindClusive</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Enter" onPress={handleLogin} />
        <Text style={styles.link}>Forgot Password? Sign Up</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  centeredImage: { alignSelf: 'center', width: 200, height: 200 }, // Adjust dimensions as needed
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5 },
  button: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 25, marginVertical: 10, width: '80%', alignItems: 'center' },
  link: { marginTop: 10, color: 'blue' }
});
