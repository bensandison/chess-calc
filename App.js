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

var counter = [0, 0, 0, 0, 0];  //array for storing count variables ( order: queen, rook, knight, bishop, pawn)

export default function App() {
  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>You have chosen: </Text>
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
  return (
    <TouchableOpacity
      style={styles.peiceButton}
      onPressOut={() => peiceInc(props.count)}
    >
      <Image
        source={props.icon}
        style={styles.peiceIcon}
      />
    </TouchableOpacity>
  )
}

function peiceInc(props) {  //increments peice counter
  switch (props.count) {
    case "0":   //queen
      counter[0]++;
    case "1":   //rook
      counter[1]++;
    case "2":   //knight
      counter[2]++;
    case "3":    //bishop
      counter[3]++;
    case "4":   //pawn
      counter[3]++;
  }
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
