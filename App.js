import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';

export default function app() {
  const [countQueen, changeQueen] = useState(0);    //useEffect variables for each peice button
  const [countRook, changeRook] = useState(0);
  const [countKnight, changeKnight] = useState(0);
  const [countBishop, changeBishop] = useState(0);
  const [countPawn, changePawn] = useState(0);
  const [resetCounter, toggleResetCounter] = useState(false);

  useEffect(() => {
    if (resetCounter) {   //checks the reset counter has been set to true
      changeQueen(0);     //changes all peice values to 0
      changeRook(0);
      changeKnight(0);
      changeBishop(0);
      changePawn(0);
      toggleResetCounter(false);  //sets reset counter back to false
    }
  }, [resetCounter]);   //useEffect runs everytime the reset button is pressed

  const [probability, updateProbability] = useState(0);   //useState to display winning probability

  useEffect(() => {   //calculates probability of player winning
    var queenValue = countQueen * 9;  //works out the value of each peice
    var rookValue = countRook * 5;
    var knightValue = countKnight * 3;
    var bishopValue = countBishop * 3;
    var pawnValue = countPawn * 1;
    var prob = (queenValue + rookValue + knightValue + bishopValue + pawnValue) / 0.78;   //gets percentage chances of player winning (with 50 being equal)
    if (prob > 99.99) {    //ensures there is never a probability larger than 100%
      prob = 99.99;
    }
    prob = prob.toFixed(2);   //rounds number to 2 decimal places

    updateProbability(prob)   //re-renders the probability on the screen
  }, [countQueen, countRook, countKnight, countBishop, countPawn]);   //this use effect hook is ran everytime one of these count variables is altered.

  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.text}>Your probability of winning is: </Text>
        <Text style={styles.outputText}>{probability}%</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonColumn}>
          <CalcButton icon={require("./assets/peices/queen.png")} count={countQueen} changeCount={changeQueen} />
          <CalcButton icon={require("./assets/peices/rook.png")} count={countRook} changeCount={changeRook} />
          <CalcButton icon={require("./assets/peices/knight.png")} count={countKnight} changeCount={changeKnight} />
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.resetButton} onPress={() => toggleResetCounter(true)}>
            <Text style={styles.text}>Reset</Text>
          </TouchableOpacity>
          <CalcButton icon={require("./assets/peices/bishop.png")} count={countBishop} changeCount={changeBishop} />
          <CalcButton icon={require("./assets/peices/pawn.png")} count={countPawn} changeCount={changePawn} />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

function CalcButton(props) {
  return (
    <TouchableOpacity style={styles.peiceButton} onPress={() => props.changeCount(props.count + 1)}>
      <Image
        source={props.icon}
        style={styles.peiceIcon}
      />
      <Text style={styles.text}>x {props.count}</Text>
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
  peiceIcon: {
    width: 75,
    height: 75,
  },
  text: {
    fontSize: 25,
  },
  outputText: {
    fontSize: 40,
  },
});