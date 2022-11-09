import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CurrentForecast from "./components/CurrentForecast";
import ForecastSearch from "./components/ForecastSearch";

const image = { uri: "https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg" };

const App = () => {
  const [city, setCity] = useState("srinagar");
  const [weather, setWeather] = useState({});
  const [error, setError]= useState(false)
  //fetch lat long by city
  const fetchLatLongHandler = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=88d2f68857724e7793f94844210302&q=${city}&days=10&aqi=yes&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
      }).catch((err)=>{
        setError(true)
      });;
  };
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=88d2f68857724e7793f94844210302&q=${city}&days=10&aqi=yes&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
      }).catch((err)=>{
        setError(true)
      });
  }, [city])

//  console.log(weather.location)
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.title}>Weather App</Text>
        </View>
        <View>
          <ForecastSearch city={city}
            setCity={setCity}
            fetchLatLongHandler={fetchLatLongHandler} />

        </View>
        <View>
          <CurrentForecast
            currentWeather={weather}
            location={weather.location}
            current={weather.current}
            error={error}
          />
        </View>

      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,

  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
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
  }
});

export default App;