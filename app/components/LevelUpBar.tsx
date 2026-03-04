import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function LevelUpBar() {
    const [levelText, setLevelText] = useState("3 / 6");
    const [levelUpBarFill, setLevelUpBarFill] = useState(50);

    const fillLevelUpBar = (currentPoints: number, pointsToLevelUp: number) => {
        // This function will fill the level up bar based on the user's points
        // For example, if the user has 3 points and needs 5 points to level up, the bar will be 60% filled
        setLevelText(`${currentPoints} / ${pointsToLevelUp}`);
        let fillPercentage = (currentPoints / pointsToLevelUp) * 100;
        setLevelUpBarFill(fillPercentage);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.fillBar, { width: `${levelUpBarFill}%` }]} />
            <Text style={styles.levelText}>{levelText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 100,
        marginBottom: 10,
        height: 5,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
    },
    fillBar: {
        backgroundColor: "green",
        height: "100%",
        borderRadius: 100,
        position: "absolute",
        left: 0,
        // transition: "width 0.3s ease",
    },
    levelText: {
        position: "absolute",
        color: "white",
        fontWeight: "bold",
        zIndex: 1,
    },
});
