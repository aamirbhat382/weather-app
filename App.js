import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ForecastSearch from "./components/ForecastSearch";
export default function App() {
  const [toggleSearch, setToggleSearch] = useState("city");
  const [city, setCity] = useState("Toronto");
  const [postalCode, setPostalCode] = useState("L4W1S9");
  const [lat, setLat] = useState(43.6532);
  const [long, setLong] = useState(-79.3832);
  const [weather, setWeather] = useState({});
  return (

    <Container>
      <Title>
        Weather App
      </Title>
      <ForecastSearch
      
      />
    </Container>
  );
}

const Container = styled.main`
  flex: 1;
  background-color: dodgerblue;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;
