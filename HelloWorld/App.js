import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO WORLD</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(77, 3, 51, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:30,
    fontStyle:"italic",
    fontWeight:700,
    color:"white",
  }
});
