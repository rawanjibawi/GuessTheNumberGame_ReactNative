import { View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButtons  from '../components/game/PrimaryButtons'
import { useState } from 'react';
import Colors from "../constants/colors";
import Title from '../components/game/Title';
import Card from '../components/game/Card';
import InstructionText from '../components/game/InstructionText';
const StartGameScreen=()=>{
  const [enteredNumber, setEnteredNumber] = useState('');
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function numberInputHandler(inputText){
    // here inputText will take the value of the TextInput automatically
    setEnteredNumber(inputText);
  }
  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber); //convert string to a number
    //isNaN means it is not a number. this will return true if chosenNumber isn't a number
    if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99) {
      // show alert ...
      Alert.alert('Invalid Number',
       'Number has to be a number between 1 and 99',
       [{ text: "okay", style:"destructive", onPress: resetInputHandler}]); // the first 
      return; // don't continue the execution, get out from the function (this function only not StartGameScreen)
    }
    console.log("valid number");
  }
    return (
      <View style={style.rootContainer}>
      <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>{/* the inside the children props */}
          <TextInput
            style={style.inputStyle}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          {/*keyboardType only show the numbar keyboard in the phone */}
          <View style={style.buttonContainer}>
            <PrimaryButtons children="Reset" child={resetInputHandler} />
            <PrimaryButtons children="Confirm" click={confirmInputHandler} />
          </View>
        </Card>
      </View>
    );
}

const style = StyleSheet.create({
  rootContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  inputStyle: {
    height: 50, // fix height
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    //space above and buttom of the input
    marginVertical: 8, //space at top and button
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer:{
    flexDirection:'row',
  }
});
export default StartGameScreen;
