import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>➕ Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FF3B30" }]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>➖ Decrease</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#0400ffff", marginTop: 15 }]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>🔄 Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#097870ff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color:"white",
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#000000ff",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
