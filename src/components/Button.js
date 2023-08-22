import { Text, View, StyleSheet } from 'react-native';

export default function Button({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 210,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  text:{
    color: '#FFF',
    fontSize: 16,
    textAlign:'center',
    fontFamily: 'Arial, sans-serif',
  }
});