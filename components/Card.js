import { View, StyleSheet, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    //backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    flex: 1,
  },
});

export default Card;