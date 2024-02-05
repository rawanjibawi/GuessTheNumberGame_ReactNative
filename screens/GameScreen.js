import { View, StyleSheet, Alert } from 'react-native';
import { Title } from '../components/game/Title';
import { PrimaryButtons } from '../components/game/PrimaryButtons'
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/game/Card';
import InstructionText from '../components/game/InstructionText';
import { Ionicons } from '@expo/vector-icons';
/* guess a number  */
 const generateRandomBetween= (min, max, exclude)=>{ //we don't want the phone to guess the number from the first time, so we added the exclude
   const rndNum = Math.floor(Math.random() * (max-min)) + min;
   if(rndNum === exclude){
     return generateRandomBetween(min, max, exclude);
   }else{
     return rndNum;
   }
 }


const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const[currentGuess, setCurrentGuess] = useState();
  useEffect(()=>{
    if(currentGuess == userNumber){
      console.log("true, go to the another screen");
    }
  })

  let minBoundary = 1;
  let maxBounary = 100;
  function nextGuessHandler(direction){ //to check if the irection is + or - it will take a string
    // we want if the generated number is really less not allowing to press the upper button
    if((direction === 'lower' && currentGuess<userNumber) || (direction === 'upper' && currentGuess>userNumber)){
      Alert.alert("Don't lie", 'You know that this is wrong...', [{text: 'Sorry!', style:'cancel'}]);
      return;
    }
    if(direction === 'lower'){
      maxBounary = currentGuess;
    }else{
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBounary, currentGuess); 
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={style.screen}>
      <Title>Opponent Text</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={style.instructionText}>
          Higher or lower?
        </InstructionText>
        {/* I want the primary buttons to be beside each other and text and buttons have column style */}
        <View style={style.buttonsContainer}>
          <View style={style.buttonContainer}>
            <PrimaryButtons onPress={() => nextGuessHandler("upper")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButtons>
          </View>
          <View style={style.buttonContainer}>
            <PrimaryButtons onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButtons>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
const style = StyleSheet.create({
  screen:{
    flex: 1,
    padding: 24, 
  },
  instructionText:{
    marginBottom: 12
  },
  buttonsContainer:{
    flexDirection: 'row'
  },
  buttonContainer:{
    flex: 1
  }
});
