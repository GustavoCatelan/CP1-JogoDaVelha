import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TurnRecorder = ({ playerName }) => {
    return (
        <View style={styles.background}>
            <View style={styles.playerBox}>
                <Text style={styles.playerName}>{playerName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
    },
    playerBox: {
        padding: 20,
        borderWidth: 2, 
        borderRadius: 10,
        backgroundColor: 'white',
    },
    playerName: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default TurnRecorder;
