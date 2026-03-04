import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Goal({ goal }: { goal: { title: string; points: number } }) {
  return (
    <View style={styles.container}>
      <View style={styles.goal}>
        <Pressable
          onLongPress={() => alert("Edit Goal")}
          style={styles.goalContent}>
          <View style={styles.textRow}>
            <Text>{goal.title}</Text>
            <Text>Points: {goal.points}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => alert("Delete Goal")}
          style={styles.completeBtn}>
          <Text style={{ color: "white" }}>✓</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  goal: {
    backgroundColor: "red",
    width: 400,
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  goalContent: {
    flex: 1,
  },
  textRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  completeBtn: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});
