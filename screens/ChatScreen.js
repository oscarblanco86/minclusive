import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet } from 'react-native';
import { OPENAI_API_KEY } from '@env';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    try {
      const newChat = { type: 'user', text: message };
      setChat([...chat, newChat]);
      setMessage('');
  
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a helpful assistant that provides professional assistance for individuals with autism. your name is MindClusive' },
            { role: 'user', content: message }
          ]
        })
      });
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = data.choices[0].message.content;
      setChat([...chat, newChat, { type: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error:', error);
      setChat([...chat, { type: 'bot', text: 'Sorry, there was an issue with the API response. Please try again.' }]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {chat.map((chatMessage, index) => (
          <Text key={index} style={chatMessage.type === 'user' ? styles.userMessage : styles.botMessage}>
            {chatMessage.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  chatContainer: { flex: 1, width: '100%', margin: 10 },
  input: { width: '80%', padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5 },
  userMessage: { alignSelf: 'flex-start', padding: 10, margin: 5, backgroundColor: '#ddd', borderRadius: 5 },
  botMessage: { alignSelf: 'flex-end', padding: 10, margin: 5, backgroundColor: '#abc', borderRadius: 5 }
});
