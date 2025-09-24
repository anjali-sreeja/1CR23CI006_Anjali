import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      // Edit task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = text;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, text]);
    }
    setText("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setText(tasks[index]);
    setEditIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== null ? "Update" : "Add"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => editTask(index)}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#9aedd1ff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, textAlign: "center"},
  inputContainer: { flexDirection: "row", marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffffff",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#358be6ff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  addButtonText: { color: "#fff", fontWeight: "bold" },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f7e0e0ff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  taskText: { fontSize: 16 },
  buttons: { flexDirection: "row", gap: 15 },
  edit: { fontSize: 18, marginRight: 10 },
  delete: { fontSize: 18, color: "red" },
});