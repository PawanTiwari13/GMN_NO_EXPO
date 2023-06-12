import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../Constants/Colors';
function Cards({children}) {
  return <View style={styles.cards}>{children}</View>;
}

export default Cards;
const styles = StyleSheet.create({
  cards: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});
