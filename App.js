import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function app() {   //this function handles all the button logic, probability maths and also contains every component of the app exept the peice buttons
  const [countQueen, changeQueen] = useState(0);    //useState hooks to controll the button components counter values
  const [countRook, changeRook] = useState(0);
  const [countKnight, changeKnight] = useState(0);
  const [countBishop, changeBishop] = useState(0);
  const [countPawn, changePawn] = useState(0);
  const [resetCounter, toggleResetCounter] = useState(false);   //Use state hook to control the reset button

  useEffect(() => {   //This function is ran everytime 'resetCounter' is updated
    if (resetCounter) {
      changeQueen(0);   //sets all the button counters to 0
      changeRook(0);
      changeKnight(0);
      changeBishop(0);
      changePawn(0);
      toggleResetCounter(false);  //sets 'resetCounter' back to false
    }
  }, [resetCounter]);

  const [probability, updateProbability] = useState(0);   //variable to display probability of a win

  useEffect(() => {   //this function is ran everytime one of the button counter variables is updated
    var queenValue = countQueen * 9;    //works out the values of each peice based of their count and weightings
    var rookValue = countRook * 5;
    var knightValue = countKnight * 3;
    var bishopValue = countBishop * 3;
    var pawnValue = countPawn * 1;
    var prob = (queenValue + rookValue + knightValue + bishopValue + pawnValue) / 0.78;   //calculates the probability of a win against the standard chess peices
    if (prob > 99.99) {   //ensures probability is not over 100%
      prob = 99.99;
    }
    prob = prob.toFixed(2);   //rounds to 2 decimal places

    updateProbability(prob)   //sends new probability to updateProbability function
  }, [countQueen, countRook, countKnight, countBishop, countPawn]);

  const [modalOpen, setModalOpen] = useState(false);  //used to toggle the modal

  return (
    <SafeAreaView SafeAreaView style={styles.container}>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <ModalContent modalVis={setModalOpen} />
      </Modal>
      <View style={styles.result}>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.modalButton}>
            <AntDesign name="questioncircleo" size={44} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.outputTextContainer}>
          <Text style={styles.text}>Your probability of winning is: </Text>
          <Text style={styles.outputText}>{probability}%</Text>
        </View>
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

function CalcButton(props) {    //this function is just for the peice buttons (it is a re-usable component and can be passed an image icon through a prop)
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

function ModalContent(props) {    //this function handles the contents of our modal component
  return (
    <View style={styles.modalContent}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>Welcome To ChessCalc!</Text>
        <TouchableOpacity onPress={() => props.modalVis(false)}>
          <AntDesign name="closecircleo" size={44} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.modalText}>ChessCalc can be used to calculate the probability of a player winning a game of chess based off the ammount of peices of each type they have left. The chances are based of the assumption that they are playing against a standard chess board on the other side.</Text>
      <Text style={styles.modalText}>To use the app tap any of the red 'peice buttons' to add a peice. For example if you have 2 rooks tap the rook button twice. Your win probability will then be output in the white box. When you want to try again press the green button to reset your peices.</Text>
      <Text style={styles.modalText}>The maths is done using the standard valuations in chess. Here each peice is given a value:</Text>
      <Text style={styles.modalText}>Pawn = 1, Knight = 3, Bishop = 3, Rook = 5, Queen = 9</Text>
      <Text style={styles.modalText}>When these scores are added up we are given a number which can be compared against the number of a normal chess board (39) to give us our probability of winning.For example we would need 39 pawns to have a 50% chance of winning against a standard chess board.</Text>
      <Text style={styles.modalText}>It should be noted that these probability scores are very much an estimate as they do not take into account other inportant factors like peice position and a players skill. They also work on the assumption that the other player is playing with standard peices and has not lost any peices.</Text>
    </View>
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
  modalContent: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 30,
  },
  modalButton: {
    marginRight: 10,
    marginTop: 30,
  },
  modalButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  outputTextContainer: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: "center",
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 25,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  modalText: {
    fontSize: 15,
    margin: 2,
  },
});