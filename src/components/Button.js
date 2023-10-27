import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export default function Button({text, loadingfeedback, color, backgroundColor}) {

  const styles = StyleSheet.create({
    container:{
      backgroundColor: `${backgroundColor === undefined ? 'rgba(255, 255, 255, 0.2)': backgroundColor}`,
      width: 210,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    text:{
      color: `${color === undefined ? '#FFF': color}`,
      fontSize: 16,
      textAlign:'center',
    }
  });

  return (
    <View style={styles.container}>
      {
        !loadingfeedback 
        ? <Text style={[styles.text]}>{text}</Text> 
        : <ActivityIndicator style={{margin: 'auto'}}/>
      }
    </View>
  );
}