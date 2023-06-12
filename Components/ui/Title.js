import {View, Text, StyleSheet} from 'react-native';
function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children} </Text>
    </View>
  );
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    borderWidth: 2,
    borderColor: 'white',
    //fontWeight:'bold',
    color: 'white',
    textAlign: 'center',
    padding: 12,
    marginTop: 40,
  },
});
