// view/LaunchScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function LaunchScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/Image_301.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Animatable.Text  
          animation="fadeIn" 
          duration={2000} 
          style={styles.text}
        >
          Welcome to Premium!
        </Animatable.Text>
        <View>
          <Text style={styles.text}>...</Text>
        </View>
        <Animatable.View 
          animation="bounce" 
          iterationCount="infinite"
          direction="alternate"
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={styles.buttonText}>Start listening</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    color: "white",
    fontWeight: 'bold', // Add this line to make text bold
  },
  button: {
    backgroundColor: '#6200EE', // Adjust button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "100%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  },
});
