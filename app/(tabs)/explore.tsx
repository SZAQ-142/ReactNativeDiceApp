import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";

export default function ExploreScreen() {
  const [history, setHistory] = useState<number[]>([]);

  // Function to simulate dice rolls (for testing)
  const rollDiceForHistory = () => {
    const newRolls = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
    setHistory(newRolls);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explore Dice Roll App</ThemedText>

      {/* Game Rules Section */}
      <Collapsible title="🎲 How to Play?">
        <ThemedText>
          Tap the "Roll Dice" button to generate a random number between 1-6.  
          Use this dice roller for board games, decision-making, or just for fun!
        </ThemedText>
      </Collapsible>

      {/* Dice Roll History */}
      <Collapsible title="📜 Roll History">
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ThemedText>{index + 1}. 🎲 Rolled: {item}</ThemedText>
          )}
        />
      </Collapsible>

      {/* Statistics Section */}
      <Collapsible title="📊 Dice Roll Stats">
        <ThemedText>Track how often each number appears!</ThemedText>
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});