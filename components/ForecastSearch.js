import React, { useState } from "react";
import { StyleSheet, TextInput, SafeAreaView, Button,Text, View } from "react-native";




const ForecastSearch = ({fetchLatLongHandler,city,setCity}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = (e) => {
    console.log("Clicked")
    fetchLatLongHandler()
  };


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={[styles.input, isFocused && {
            color: "#495057",
            backgroundColor: "#fff",
            borderColor: "#80bdff",
            outline: 0,
            boxSshadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
          }]}
          onFocus={() => setIsFocused(true)}
          placeholder="Enter City Name"
          keyboardType="default"
          value={city}
          onChangeText = {setCity}
        />
        <Button style={styles.buttons}
          title="Search"
          color="#841584"
          accessibilityLabel="Search by City"
          onPress={handleSubmit}
        
        />
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  input: {
    height: 45,
    margin: 12,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    outline: "none",
    border: 0
  },
  inputFocus: {
    color: "#495057",
    backgroundColor: "#fff4",
    borderColor: "#80bdff",
    outline: 0,
    boxSshadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
  },
  buttons:{
    height: 45,
    margin: 12,
    padding: 15,
  }
});

export default ForecastSearch;

