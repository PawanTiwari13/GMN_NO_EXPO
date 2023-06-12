import {View, TextInput, StyleSheet, Alert, Text, Button} from 'react-native';
import {useState} from 'react';
import Title from '../Components/ui/Title';
import Cards from '../Components/ui/Cards';
import Colors from '../Constants/Colors';
import PrimaryScreen from '../Components/ui/PrimaryScreen';
import InstructionText from '../Components/ui/InstructionText'
function StartGameScreen({onPickedNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetinputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number !', 'Number has to Number betwwen 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: resetinputHandler},
      ]);
    }
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title> Guess My Number </Title>
      <Cards style={styles.inputContainer}>
        <InstructionText style={styles.instructionText}>
          {' '}
          Enten A Number
        </InstructionText>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.BContainer}>
            <PrimaryScreen onPress={resetinputHandler}>Reset</PrimaryScreen>
          </View>
          <View style={styles.BContainer}>
            <PrimaryScreen onPress={confirmInputHandler}>Confirm</PrimaryScreen>
          </View>
        </View>
      </Cards>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 36,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    width: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  BContainer: {
    flex: 1,
  },
});
