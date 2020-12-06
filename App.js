import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';

export default function App() {
  const [peiceName, setPeiceName] = useState("N/A");
  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>You have chosen: {peiceName} </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.peiceButton} onPress={() => setPeiceName("Queen")}>
            <Image
              source={require("./assets/peices/queen.png")}
              style={styles.peiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.peiceButton} onPress={() => setPeiceName("Rook")}>
            <Image
              source={require("./assets/peices/rook.png")}
              style={styles.peiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.peiceButton} onPress={() => setPeiceName("Knight")}>
            <Image
              source={require("./assets/peices/knight.png")}
              style={styles.peiceIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.resetButton} onPress={() => setPeiceName("Reset")}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.peiceButton} onPress={() => setPeiceName("Bishop")}>
            <Image
              source={require("./assets/peices/bishop.png")}
              style={styles.peiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.peiceButton} onPress={() => setPeiceName("Pawn")}>
            <Image
              source={require("./assets/peices/pawn.png")}
              style={styles.peiceIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: 'black',
  },
  buttons: {
    flexDirection: 'row',
    flex: 2,
  },
  buttonColumn: {
    flex: 1,
  },
  peiceButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'tomato',
  },
  resetButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'teal',
  },
  resetButtonText: {
    fontSize: 25,
  },
  resultText: {
    fontSize: 25,
  },
  peiceIcon: {
    width: 75,
    height: 75,
  },
});
