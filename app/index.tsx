import { Text, View, StyleSheet, Pressable } from "react-native";
import GoalList from "./components/GoalList";
import LevelUpBar from "./components/LevelUpBar";
import Reward from "./components/Reward";

export default function Index() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Goal Getter</Text>
      <LevelUpBar />
    </View>
    <View style={styles.container}>
      <Reward />
    </View>
    <View style={styles.container}>
      <GoalList />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});