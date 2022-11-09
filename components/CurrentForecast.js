import React from 'react'
import { StyleSheet, TextInput, SafeAreaView, Button, Text, View, Image } from "react-native";
import moment from "moment";
const CurrentForecast = ({currentWeather,location,current,error}) => {

    return (

        <View style={styles.container}>
            <SafeAreaView>
                {error &&(
                     <Text style={styles.text}>No City Found</Text>
                )}
            {location && (
                <>
                <Text style={styles.locationText}>{location.name}, {location.country} </Text>
                <Text style={styles.date} >{moment(location.localtime).format('MMMM Do YYYY, h:mm A')} </Text>
                </>
            )}
            {current && (
                <view style={styles.card}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: `https://${current.condition.icon}`,
                        }}
                    />
                    <Text style={styles.currentDegree}>{Math.round(current.temp_c)}°C</Text>
                </view>
                )}
                {current && (
                <View>
                    <Text style={styles.date}>{current.condition.text}</Text>
                </View>
                )}
            </SafeAreaView>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5
    },
    locationText: {
        color: "black",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5
    },
    date: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5
    },
    img: {
        width: 100,
        height: 100
    },
    card:{
        display:"flex",
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    currentDegree :{
        fontSize: 80,
        fontWeight: "bold",
        color: "#fff",
        

    }
});
export default CurrentForecast