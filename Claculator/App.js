import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const finalResult = eval(input.replace('×', '*').replace('÷', '/'));
        setResult(finalResult.toString());
      } catch (e) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['C', '÷', '×', '⌫'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.',],
  ];

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const renderButtons = () => {
    return buttons.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.buttonRow}>
        {row.map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() =>
              button === '⌫'
                ? handleBackspace()
                : handlePress(button)
            }
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051804ff',
    justifyContent: 'flex-end',
  },
  display: {
    padding: 20,
    backgroundColor: '#847c7cff',
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 36,
    color: '#000',
  },
  resultText: {
    fontSize: 28,
    color: '#000',
    marginTop: 10,
  },
  buttonsContainer: {
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00000',
    padding: 20,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#847c7cff',
  },
});
