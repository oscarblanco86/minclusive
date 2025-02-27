// screens/PictogramsScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const pictograms = [
  { label: 'I want', emoji: '🆘' },
  { label: 'Food', emoji: '🍔' },
  { label: 'Drink', emoji: '🍹' },
  { label: 'See', emoji: '👀' },
  { label: 'Play', emoji: '⚽' },
];

export default function PictogramsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={pictograms}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  item: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  emoji: { fontSize: 50, marginRight: 10 },
  label: { fontSize: 18 }
});
