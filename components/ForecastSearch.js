import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";


const ForecastSearch = ({
  toggleSearch,
  setToggleSearch,
  city,
  setCity,
  fetchLatLongHandler,
  fetchByPostalHandler,
  setPostalCode,
  postalCode,
}) => {


  return (
    <View style={style.container}>
      <View>
        <Text>Search By City</Text>
        <TextInput style={style.searchInput} placeholder="Entry City Name"></TextInput>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 700,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  title: {
    fontSize: 12,
    color: "#000",
  },
  searchInput: {
    height: "50px",
    margin: "12px",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    width: "95%",
    maxWidth: "700px",
    outline: "none"
  }
})

export default ForecastSearch;