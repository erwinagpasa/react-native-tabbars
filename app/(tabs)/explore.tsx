import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, Platform, ScrollView } from 'react-native';





export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.coloredText}>Erwin Agpasa</Text>
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
