import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ForecastSearch from "./components/ForecastSearch";

const image = { uri: "https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.header}>
      <Text style={styles.title}>Weather App</Text>
      <ForecastSearch/>

      </View>
      
        
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    
  },
  header:{
    padding:10 ,
    backgroundColor: "#000000c0",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;