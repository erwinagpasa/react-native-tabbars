import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.coloredText}>Erwin Agpasa</Text>
      <Text style={styles.coloredText}>{apiUrl}</Text>
      {Array(100).fill(null).map((_, index) => (
        <Text key={index} style={styles.coloredText}>index</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  coloredText: {
    color: 'blue', // Change this to the color you want
  },
});
