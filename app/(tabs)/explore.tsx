import { StyleSheet, Text, ScrollView } from 'react-native';
import { useAppContext } from '../Context';

export default function TabTwoScreen() {
  const { setValue } = useAppContext();

  const handlePress = (event: any) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      setValue('hide');
    } else {
      setValue('show');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} onScroll={handlePress}>
      <Text style={styles.coloredText}>Erwin Agpasa</Text>
      {Array(100).fill(null).map((_, index) => (
        <Text key={index} style={styles.coloredText}>
          {index}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  coloredText: {
    color: 'blue',
  },
});
