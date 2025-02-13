import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function DiceRollApp() {
    const [diceValue, setDiceValue] = useState(1);

    // Function to roll the dice
    const rollDice = () => {
        const newRoll = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newRoll);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>🎲 Dice Roll App 🎲</Text>

            {/* Display Dice Roll Result */}
            <Text style={styles.diceText}>You rolled: {diceValue}</Text>

            {/* Dice Roll Button */}
            <TouchableOpacity style={styles.button} onPress={rollDice}>
                <Text style={styles.buttonText}>Roll Dice</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    diceText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#007AFF",
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
});