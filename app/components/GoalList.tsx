import { Text, View, StyleSheet, Pressable } from "react-native";
import Goal from "./Goal";
import { useState } from "react";

export default function GoalList() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Goal 1", points: 3 },
    { id: 2, title: "Goal 2", points: 5 },
  ]);

  return (
    <View style={styles.container}>
      <Text>Goal List</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => alert("Button Pressed")}
          style={{ backgroundColor: "blue", padding: 10, borderRadius: 5, position: "absolute", right: 10, top: 1 }}>
          <Text style={{ color: "white" }}>+</Text>
        </Pressable>
        <ul style={styles.list}>
          {goals.map((goal) => (
            <Goal key={goal.id} goal={goal} />
          ))}
        </ul>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    padding: 20,
    margin: 10,
  },
  list: {
    width: "100%",
    marginTop: 20,
    borderColor: "gray",
  },
});
