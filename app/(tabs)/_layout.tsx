import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Dice Roll App 🎲" }} />
            <Stack.Screen name="explore" options={{ title: "Explore" }} />
        </Stack>
    );
}