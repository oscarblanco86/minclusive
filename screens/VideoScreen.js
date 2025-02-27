// screens/VideoScreen.js

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Screen</Text>
      {Platform.OS === 'web' ? (
        <>
          <iframe
            style={styles.video}
            src="https://www.youtube.com/embed/JYPeOm5A8XQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video 1"
          ></iframe>
          <iframe
            style={styles.video}
            src="https://www.youtube.com/embed/6qFvmqpZfjc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video 2"
          ></iframe>
        </>
      ) : (
        <>
          <WebView
            style={styles.video}
            javaScriptEnabled={true}
            source={{ uri: 'https://www.youtube.com/embed/JYPeOm5A8XQ' }}
          />
          <WebView
            style={styles.video}
            javaScriptEnabled={true}
            source={{ uri: 'https://www.youtube.com/embed/6qFvmqpZfjc' }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  video: { width: '80%', height: "80%", marginBottom: 20 },
});

export default VideoScreen;
