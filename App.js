import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';

export default function app() {
  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>Your probability of winning is: </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonColumn}>
          <CalcButton count="0" icon={require("./assets/peices/queen.png")} />
          <CalcButton count="1" icon={require("./assets/peices/rook.png")} />
          <CalcButton count="2" icon={require("./assets/peices/knight.png")} />
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
          <CalcButton count="3" icon={require("./assets/peices/bishop.png")} />
          <CalcButton count="4" icon={require("./assets/peices/pawn.png")} />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

function CalcButton(props) {
  const [peiceCounter, counterIncrement] = useState(0);

  return (
    <TouchableOpacity style={styles.peiceButton} onPress={() => counterIncrement(peiceCounter + 1)}>
      <Image
        source={props.icon}
        style={styles.peiceIcon}
      />
      <Text style={styles.counterText}>{peiceCounter}</Text>
    </TouchableOpacity >
  )
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
  counterText: {
    fontSize: 25,
  }
});
