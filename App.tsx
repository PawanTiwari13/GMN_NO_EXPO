import {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import  React from 'react-native';
import GameOverScreen from './Screen/GameOverScreen';
import Colors from './Constants/Colors';
import GameScreen from './Screen/GameScreen';
import StartGameScreen from './Screen/StartGameScreen';
 function App() {
  const [userNumber, setuserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  function pickedNumberHandler(pickedNumber: number) {
    setuserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameIsOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function statNewGameHamndler() {
  
    setuserNumber(0);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={statNewGameHamndler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/Image/Pawan.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundimage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
export default App;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundimage: {
    opacity: 0.15,
  },
});
