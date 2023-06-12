import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
function PrimaryScreen({children, onPress}) {
  function pressHandler() {}
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: Colors.primary500}}
        onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryScreen;
const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#fff',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.75,
  },
});
